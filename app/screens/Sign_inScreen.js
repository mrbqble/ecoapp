import React, { useState } from "react";
import {View, Image, TextInput, StyleSheet, TouchableOpacity, Linking, Text} from "react-native";
function Sign_inScreen({ navigation }) {
	const [email, onChangeEmail] = useState(null);
	const [password, onChangePassword] = useState(null);
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
					height: 200,
					alignItems: 'center',
				}}
			>
				<Image
					source = {require("../assets/Logo.png")}
					style = {{
						width: 129,
						height: 171
					}}
				/>
			</View>
			<View
				style = {{
					width: '100%'
				}}
			>
				<TextInput
					keyboardType = "email-address"
					style = {styles.input}
					onChangeText = {onChangeEmail}
					value = {email}
					placeholder = 'Почта'
				/>
				<TextInput
					secureTextEntry = {true}
					style = {styles.input}
					onChangeText = {onChangePassword}
					value = {password}
					placeholder = 'Пароль'
				/>
				<Text 
					onPress = {() => Linking.openURL('https://google.com')}
					style = {{
						alignSelf: 'flex-end',
						marginTop: 5,
						marginRight: 25,
						color: 'black',
						textDecorationLine: 'underline',
					}}
				>Забыли пароль?</Text>
				<TouchableOpacity
					style = {styles.sign_in}
					onPress = {() => navigation.navigate('Map')}
				>
					<Text
						style = {{
							color: 'white',
							fontWeight: 'bold',
						}}
					>Вход</Text>
				</TouchableOpacity>
				<View style = {{
					marginLeft: 25,
					marginRight: 25,
					marginTop: 15,
					flexDirection: 'row',
					width: '100%',
					alignItems: 'center'
				}}>
					<View style = {{
						borderWidth: 0.5,
						height: 1,
						borderColor: 'grey',
						width: 148,
					}}/>
					<Text
					style = {{
						marginLeft: 10,
						marginRight: 10,
					}}>ИЛИ</Text>
					<View style = {{
						borderWidth: 0.5,
						height: 1,
						borderColor: 'grey',
						width: 149,
					}}/>
				</View>
				<TouchableOpacity
					style = {styles.use_google}
					onPress = {() => console.log("Using google")}
				>
					<View
						style = {{
							flexDirection: 'row',
							alignItems: 'center'
						}}
					>
						<Image
							source={require('../assets/google.png')}
							style = {{
								width: 25,
								height: 25,
							}}
						/>
						<Text
							style = {{
								color: 'black',
								marginLeft: 10,
							}}
						>Войти через Google</Text>
					</View>
				</TouchableOpacity>
				<Text
                    style = {{
                        alignSelf: 'center',
                        marginTop: 40,
                        color: 'grey',
                    }}
                >У вас еще нет аккаунта? <Text
                        onPress = {() => navigation.navigate('Registration')}
                        style = {{
                            color: 'black',
                            textDecorationLine: 'underline',
                        }}
                    >Зарегистрируйтесь</Text>
				</Text>
			</View>
        </View>
    );
}

const styles = StyleSheet.create({
	input: {
		marginTop: 10,
		height: 45,
		marginLeft: 25,
		marginRight: 25,
		borderWidth: 1,
		padding: 10,
		borderRadius: 10,
		borderColor: 'grey',
	},
	sign_in: {
		padding: 15,
		marginTop: 30,
		marginLeft: 25,
		marginRight: 25,
		alignItems: 'center',
		backgroundColor: '#2B723B',
		borderRadius: 10,
	},
	use_google: {
		padding: 10,
		marginTop: 15,
		marginLeft: 25,
		marginRight: 25,
		alignItems: 'center',
		borderColor: '#2B723B',
		borderWidth: 1,
		borderRadius: 10,
	}
})
export default Sign_inScreen;