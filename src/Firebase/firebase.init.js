import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseInitializer = () => {
    return initializeApp(firebaseConfig);
};

export default firebaseInitializer;