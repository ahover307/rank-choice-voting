import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";

// Initialize firebase integration
export const initFirebase = () => {
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
    apiKey: "AIzaSyBuM7abnJodewymN0X6YfcIt5mUReiLgEY",
    authDomain: "rank-choice-voting.firebaseapp.com",
    projectId: "rank-choice-voting",
    storageBucket: "rank-choice-voting.appspot.com",
    messagingSenderId: "754337346838",
    appId: "1:754337346838:web:550159d7e4f95c6e2f0c37",
    measurementId: "G-MRG6VYLN88"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    return [app, analytics];
}
