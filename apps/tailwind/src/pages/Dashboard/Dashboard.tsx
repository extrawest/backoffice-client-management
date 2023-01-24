import { FC, useEffect } from "react";
import { getFirestore, collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { firebaseApp } from "@mono-redux-starter/firebase";

export const Dashboard: FC = () => {
	const [value, loading, error] = useCollection(collection(
		getFirestore(firebaseApp),
		"clients"
	));
	useEffect(
		() => {
			console.log(value);
		},
		[value]
	);
	return (
		<>
			Dashboard
		</>
	);
};

export default Dashboard;
