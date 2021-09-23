import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDUkaSHLs3qqgGrSFqvZot9-3OTPGF0hgs",
    authDomain: "myresume-2e851.firebaseapp.com",
    databaseURL: "https://myresume-2e851.firebaseio.com",
    projectId: "myresume-2e851",
    storageBucket: "myresume-2e851.appspot.com",
    messagingSenderId: "149206927166",
    appId: "1:149206927166:web:82af25b4346257cd248e6f",
    measurementId: "G-1BY4RGGY6K"
  };

const fire = app.initializeApp(firebaseConfig);

export default fire;

//Error codes
const EMAIL_IN_USE = 'auth/email-already-in-use';
const PASSWORD_TO_SHORT = 'auth/weak-password';
const INVALID_CREDENTIALS = 'auth/user-not-found';
const INVALID_EMAIL = 'auth/invalid-email';
const WRONG_PASSWORD = 'auth/wrong-password';

//Map Error codes to display message
const errors = {
  [EMAIL_IN_USE]: "There's already an account with that email.",
  [PASSWORD_TO_SHORT]: "The password must be at least 6 characters long.",
  [INVALID_CREDENTIALS]: "The username or password is incorrect.",
  [INVALID_EMAIL]: "Please enter a valid email address.",
  [WRONG_PASSWORD]: "The username or password is incorrect."
}

export const getErrorMessage = (code) => {
  return errors[code] ? errors[code] : 'Something went wrong.';
}