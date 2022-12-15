import React, { useState } from 'react';
import { SafeAreaView, View, Image, TextInput, StyleSheet, TouchableOpacity, Text} from "react-native";
function RegistrationScreen({ navigation }) {
    const [fname, onChangeFname] = useState(null);
    const [lname, onChangeLname] = useState(null);
    const [email, onChangeEmail] = useState(null);
	const [password, onChangePassword] = useState(null);
    const [cpassword, onChangeCpassword] = useState(null);
	const [number, onChangeNumber] = useState(null);
    return (
        <SafeAreaView
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
					style = {styles.input}
					onChangeText = {onChangeFname}
					value = {fname}
					placeholder = 'Имя'
				/>
				<TextInput
					style = {styles.input}
					onChangeText = {onChangeLname}
					value = {lname}
					placeholder = 'Фамилия'
				/>
                <TextInput
					keyboardType = 'email-address'
					style = {styles.input}
					onChangeText = {onChangeEmail}
					value = {email}
					placeholder = 'Почта'
				/>
				<TextInput
					keyboardType = 'numeric'
					style = {styles.input}
					onChangeText = {onChangeNumber}
					value = {number}
					placeholder = 'Номер телефона'
				/>
				<TextInput
					secureTextEntry = {true}
					style = {styles.input}
					onChangeText = {onChangePassword}
					value = {password}
					placeholder = 'Пароль'
				/>
                <TextInput
					secureTextEntry = {true}
					style = {styles.input}
					onChangeText = {onChangeCpassword}
					value = {cpassword}
					placeholder = 'Потвердите пароль'
				/>
				<TouchableOpacity
					style = {styles.sign_in}
					onPress = {() => navigation.navigate('Sign_in')}
				>
					<Text
						style = {{
							color: 'white',
							fontWeight: 'bold',
						}}
					>Зарегистрироваться</Text>
				</TouchableOpacity>
                <Text
                    style = {{
                        alignSelf: 'center',
                        marginTop: 40,
                        color: 'grey',
                    }}
                >Уже есть аккаунт? <Text
                        onPress = {() => navigation.navigate('Sign_in')}
                        style = {{
                            color: 'black',
                            textDecorationLine: 'underline',
                        }}
                    >Войдите</Text>
                </Text>
			</View>
        </SafeAreaView>
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
	}
})

export default RegistrationScreen;