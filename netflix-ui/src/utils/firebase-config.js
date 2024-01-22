
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDV4Nw-0UKAMe-6zdPHB26WIRvjDpxtIkg",
  authDomain: "reactnetflixclone-87f77.firebaseapp.com",
  projectId: "reactnetflixclone-87f77",
  storageBucket: "reactnetflixclone-87f77.appspot.com",
  messagingSenderId: "636252150954",
  appId: "1:636252150954:web:982feb9e5b9b869e6f04d3",
  measurementId: "G-W8CW9V9169"
};


const app = initializeApp(firebaseConfig);


export const firebaseAuth = getAuth(app)