import { FC, useEffect } from "react";
import { getFirestore, collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { firebaseApp } from "@mono-redux-starter/firebase";
import { DashboardContainer } from "@mono-redux-starter/antdapplib";

export const Dashboard: FC = () => {
	return (
		<>
			<DashboardContainer />
		</>
	);
};

export default Dashboard;
