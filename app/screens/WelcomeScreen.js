import React from "react";
import { View, Image, TouchableOpacity, StyleSheet, Text } from "react-native";

function WelcomeScreen({ navigation }) {
    return (
		<View 
			style = {{
				backgroundColor: '#fff',
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<View
				style = {{
					height: 250,
					alignItems: 'center',
				}}
			>
				<Image
					source = {require('../assets/Logo.png')}
					style = {{
						width: 129,
						height: 171
					}}
				/>
			</View>
			<View
				style = {{
					width: '100%',
					height: 200,
					backgroundColor: 'white',
				}}
			>
				<TouchableOpacity
					style = {styles.registration}
					onPress = {() => navigation.navigate('Registration')}
				>
					<Text
						style = {{
							color: 'white',
							fontWeight: 'bold',
						}}
					>Зарегистрироваться</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style = {styles.sign_in1}
					onPress = {() => navigation.navigate('Sign_in')}
				>
					<Text
						style = {{
							color: '#2B723B',
							fontWeight: 'bold',
						}}
					>Войти</Text>
				</TouchableOpacity>
			</View>
		</View>
  	);
}

const styles = StyleSheet.create({
	registration: {
		backgroundColor: '#2B723B',
		padding: 15,
		marginLeft: 25,
		marginRight: 25,
		alignItems: 'center',
		borderRadius: 10,
	},
	sign_in1: {
		padding: 15,
		marginTop: 30,
		marginLeft: 25,
		marginRight: 25,
		alignItems: 'center',
		borderColor: '#2B723B',
		borderWidth: 1,
		borderRadius: 10,
	},
})

export default WelcomeScreen;