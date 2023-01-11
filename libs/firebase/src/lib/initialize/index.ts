import { getAuth } from "firebase/auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import {
	getFirestore,
	collection,
	doc,
	setDoc,
	getDoc
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import {
	useCollection,
	useCollectionData,
	useDocument,
	useDocumentData
} from "react-firebase-hooks/firestore";
import { getStorage, ref as refStorage } from "firebase/storage";

export const firebaseApp = firebase.initializeApp({
	apiKey: process.env["NX_FIREBASE_API_KEY"],
	authDomain: process.env["NX_FIREBASE_AUTH_DOMAIN"],
	databaseURL: process.env["NX_FIREBASE_DATA_BASE_URL"],
	projectId: process.env["NX_FIREBASE_PROJECT_ID"],
	storageBucket: process.env["NX_FIREBASE_STORAGE_BUCKET"],
	messagingSenderId: process.env["NX_FIREBASE_MESSAGING_SENDER_ID"],
	appId: process.env["NX_FIREBASE_APP_ID"],
});

export const auth = getAuth(firebaseApp);
export const firestore = () => getFirestore(firebaseApp);

export {useCollection,
	useCollectionData,
	useDocument,
	useDocumentData,
	collection,
	doc,
	setDoc,
	getDoc,
	useAuthState};

export const ticketsCollectionRef = collection(
	firestore(),
	"tickets"
);

export const storage = getStorage(firebaseApp);

export const clientsStorage = refStorage(
	storage,
	"/clients"
);
