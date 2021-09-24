import * as actionTypes from './actionTypes';
import firebase, { getErrorMessage } from '../firebase/firebase';
import emptyResume, { trueEmptyResume } from '../Js/emptyResume';

let db = firebase.database();
let auth = firebase.auth();

export const resetState = () => {
    return {
        type: actionTypes.RESET_STATE
    }
}

export const updateSection = (section, sectionData) => {
    return {
        type: actionTypes.UPDATE_SECTION,
        payload: {
            [section]: sectionData
        }
    }
}

export const setResume = (resume) => {
    return{
        type: actionTypes.SET_RESUME,
        payload: resume
    }
}

export const initResume = (index, callback) => {
    
    //This ensures that we get the correct structure regardless of changes to resume structure
    const fillWithDefault = (resume) => {
        const keys = Object.keys(trueEmptyResume);

        keys.forEach((key) => {
            //Only do Personal Information and Education
            if(!(key === "PersonalInformation" || key === "Education")) return;

            const newSection = {
                ...trueEmptyResume[key],
                ...resume[key]
            }

            resume[key] = newSection;
        });

        return {...resume};
    }

    return (dispatch) => {
        //Return Guest Resume
        if(index === -1){
            db.ref('resumeContents/Guest').once('value').then((snapshot) => {
                dispatch(setResume(fillWithDefault(snapshot.val())));
                dispatch(setMeta({
                    name: 'MyResume',
                    filename: 'myresume.pdf'
                }));
                callback();
            });
        }
        else{
            //Get this user's resume and meta data at the given index
            let path = `resumeContents/${auth.currentUser.uid}/${index}`;
            db.ref(path).once('value').then((snapshot) => {
                db.ref(`resumes/${auth.currentUser.uid}/${index}`).once('value').then((meta) => {
                    
                    dispatch(setResume(fillWithDefault(snapshot.val())));
                    dispatch(setMeta(meta.val()));
                    callback();
                });
            });
        }
        
    }
}

const setMeta = (meta) => {
    return {
        type: actionTypes.SET_META,
        payload: meta
    }
}

export const setResumeIndex = (index) => {
    return {
        type: actionTypes.SET_RESUME_INDEX,
        payload: index
    }
}

export const setUser = () => {

    let user = auth.currentUser;
    let object = user ? {
        email: user.email,
        uid: user.uid  
    } : {
        email: 'Guest',
        uid: 'Guest'
    };

    return {
        type: actionTypes.SET_USER,
        payload: object
    }
}

export const loginUser = (email, password, login, errorFunc) => {
    return (dispatch) => {
        if(!login){
            auth.createUserWithEmailAndPassword(email, password)
                .then(() => {
                    //Set current user
                    dispatch(setUser());
                    //Initialize list of resume names
                    db.ref('resumes/' + auth.currentUser.uid).set([{
                        name: 'MyResume',
                        filename: 'myresume.pdf'
                    }]);
                    //Initialize list of resume contents
                    db.ref('resumeContents/' + auth.currentUser.uid).set([
                        emptyResume
                    ]);
                })
                .catch((error) => errorFunc(getErrorMessage(error.code)));
        }
        else{
            auth.signInWithEmailAndPassword(email, password)
                .then(() => {
                    dispatch(setUser());
                })
                .catch((error) => errorFunc(getErrorMessage(error.code)));
        }
        
    }
}
