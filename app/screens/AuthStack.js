import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './app/screens/WelcomeScreen';
import Registration from "./app/screens/RegistrationScreen";
import Sign_in from './app/screens/Sign_inScreen';
import Map from "./app/screens/MapScreen";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen component={Main} name = "Main" options = {{headerShown: false}}/>
				<Stack.Screen component={Sign_in} name = "Sign_in"/>
				<Stack.Screen component={Registration} name = "Registration"/>
				<Stack.Screen component={Map} name = "Map" options = {{headerShown: false}}/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default AuthStack;