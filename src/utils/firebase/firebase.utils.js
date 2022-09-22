import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBGNeJFU1L8VsIAkSezTFn0scp4h1Qy0wU',
  authDomain: 'clothing-shop-8b6ea.firebaseapp.com',
  projectId: 'clothing-shop-8b6ea',
  storageBucket: 'clothing-shop-8b6ea.appspot.com',
  messagingSenderId: '493287559449',
  appId: '1:493287559449:web:f02f041f019151b03ab588',
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
