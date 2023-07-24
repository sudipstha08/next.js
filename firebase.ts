import firebase from "firebase/app";
import "firebase/auth";

let app: any, auth: any;

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
} as const;

// Initialize Firebase
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
  auth = app.auth();
} else {
  // if already initialized, use this one
  firebase.app();
}

export { app, auth, firebase };
