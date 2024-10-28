import { collection, addDoc, getDocs } from "firebase/firestore";
import { auth, db } from "./firebaseConfig"; 
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const addUserToFirestore = async (user) => {
  try {
    await addDoc(collection(db, "users"), user);
    console.log("User added to Firestore:", user);
  } catch (error) {
    console.error("Error adding user to Firestore:", error);
    throw error;
  }
};

export const getUsersFromFirestore = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    return querySnapshot.docs.map(doc => doc.data());
  } catch (error) {
    console.error("Error fetching users from Firestore:", error);
    throw error;
  }
};


export const registerUser = async (email, password, name) => {
	try {
	  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
	  const user = userCredential.user;
	  console.log("User registred:", user);
	  
	  await addUserToFirestore({ uid: user.uid, name, email });
	  return user;
	} catch (error) {
		console.error("!!!!!!!!!!!!Error registering user:", error); 
	  throw error;
	}
 };
 


export const loginUser = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};
