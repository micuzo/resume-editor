import * as actionTypes from './actionTypes';
import firebase, { getErrorMessage } from '../firebase/firebase';
import validateResume from '../services/resumeValidation';
import ResumeBuilder from '../services/ResumeBuilder';

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
    
    return (dispatch) => {
        //Return Guest Resume
        if(index === -1){
            db.ref('resumeContents/Guest').once('value').then((snapshot) => {
                const newResume = validateResume(snapshot.val());
                dispatch(setResume(newResume));
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
                    const newResume = validateResume(snapshot.val());
                    dispatch(setResume(newResume));
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
                        ResumeBuilder.createTutorialResume()
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
