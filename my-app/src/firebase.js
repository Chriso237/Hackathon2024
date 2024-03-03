// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDc-JZmdPXUMwd9-NZwOlSYAu019FS07Ck",
    authDomain: "esp8266-2-bbe56.firebaseapp.com",
    databaseURL: "https://esp8266-2-bbe56-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "esp8266-2-bbe56",
    storageBucket: "esp8266-2-bbe56.appspot.com",
    messagingSenderId: "121331619273",
    appId: "1:121331619273:web:d266630a1a1f5ec3244418"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

console.log(database);
export {app,database}
