import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyCK3NIzIRIE5M5duSDCTqlhnlGT3qgqUMw",
  authDomain: "e-commerce-coder-2836a.firebaseapp.com",
  projectId: "e-commerce-coder-2836a",
  storageBucket: "e-commerce-coder-2836a.firebasestorage.app",
  messagingSenderId: "421923015367",
  appId: "1:421923015367:web:b0f4851d697e330bdd0ce2"
};

export const app = initializeApp(firebaseConfig)