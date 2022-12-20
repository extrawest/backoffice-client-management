import * as firebase from "firebase/app";
import "firebase/auth";

export const firebaseApp = firebase.initializeApp({
	apiKey: process.env.NX_FIREBASE_API_KEY,
	authDomain: process.env.NX_FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.NX_FIREBASE_DATA_BASE_URL,
	projectId: process.env.NX_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NX_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NX_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NX_FIREBASE_APP_ID,
});
