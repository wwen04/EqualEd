import {auth} from './firebase-config';

import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, updatePassword, updateProfile, deleteUser, User } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

const db = getFirestore();

export const doCreateUser = async (email: string, password: string, firstName: string, lastName: string) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(userCredential.user, {
    displayName: '${firstName} ${lastName}' ,
  });
  // Add user to Firestore
  await setDoc(doc(db, 'users', userCredential.user.uid), {
    email,
    firstName,
    lastName,
    createdAt: new Date(),
  });
  return userCredential;
};

// export const addUsername = async (username: string) => {
//   const currentUser = auth.currentUser;
//   if (currentUser) {
//     const userDocRef = doc(db, 'users', currentUser.uid);
//     await setDoc(userDocRef, { username: username, email: currentUser.email });
//   }
// }

export const doSignInWithEmailAndPassword = async (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password)
}

export const doSendPasswordResetEmail = async (email: string) => {
  return sendPasswordResetEmail(auth, email)
}

export const doSignOut = () => {
  return auth.signOut()
}

export const doPasswordChange = (password: string) => {
  const currentUser = auth.currentUser;
  if (currentUser) {
    return updatePassword(currentUser, password);
  }
}

export const getCurrentUser = () => {
  return auth.currentUser;
}