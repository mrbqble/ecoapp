import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import AppStack from "./app/screens/AppStack";

export default function App() {
	return (
		<NavigationContainer>
			<AppStack/>
		</NavigationContainer>
	);
}