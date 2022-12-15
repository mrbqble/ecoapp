import React, { useState } from 'react';
import { SafeAreaView, View, Image, TextInput, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

export default function MapScreen({navigation}) {
    const [search, onChangeSearch] = useState(null);

    const initialMapState = {
        categories: [
            {
                name: 'Пластмасса',
            },
            {
                name: 'Бумага',
            },
            {
                name: 'Стекло',
            },
            {
                name: 'Металл',
            },
            {
                name: 'Биоотходы',
            },
        ],
    }

    const [state, setState] = useState(initialMapState);

    return (
        <SafeAreaView
            style = {{
                flex: 1,
            }}
        >
            <MapView
                provider = {PROVIDER_GOOGLE}
                style = {styles.map}
                region = {{
                    latitude: 42.381595,
                    longitude: 69.593975,
                    latitudeDelta: 0.02,
                    longitudeDelta: 0.02,
                }}
            >
                <Marker
                    coordinate = {{
                        latitude: 42.381595,
                        longitude: 69.593975,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                    image = {require('../assets/marker.png')}
                ></Marker>
            </MapView>
            <View 
                style = {{
                    position: 'absolute',
                    top: 40,
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <TouchableOpacity
                    onPress = {() => navigation.navigate('Profile')}
                >
                    <Image 
                        style = {{
                            marginLeft: 15,
                        }}
                        source = {require('../assets/Menu.png')}/>
                </TouchableOpacity>
                <TextInput
					style = {styles.input}
					onChangeText = {onChangeSearch}
					value = {search}
					placeholder = 'Поиск'
				/>
            </View>
            <ScrollView
                horizontal
                scrollEventThrottle = {1}
                showsHorizontalScrollIndicator = {false}
                height = {50}
                style = {styles.chipsScrollView}
                contentContainerStyle = {{
                    paddingRight: 20,
                }}
            >
                {state.categories.map((category, index) => (
                    <TouchableOpacity key = {index} style = {styles.chipsItem}>
                        <Text>{category.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <View style = {{
                alignItems: 'flex-end',
                position: 'absolute',
                bottom: 20,
                right: 10,
            }}>
                <TouchableOpacity>
                    <Image source = {require('../assets/plus.jpg')} style = {{
                        width: 35,
                        height: 35,
                        marginBottom: 5,
                        borderRadius: 20,
                    }}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source = {require('../assets/-.jpg')} style = {{
                        width: 35,
                        height: 35,
                        marginBottom: 10,
                        borderRadius: 20,
                    }}/>
                </TouchableOpacity>
                <TouchableOpacity style = {{
                    backgroundColor: '#14C96E',
                    paddingHorizontal: 25,
                    paddingVertical: 10,
                    borderRadius: 20,
                }}>
                    <Text
                        style = {{
                            color: 'white',   
                        }}
                    >Рядом</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style = {{
                position: 'absolute',
                left: 20,
                bottom: 30,
            }}>
                <Image source = {require('../assets/bookmarks.png')} style = {{
                    width: 30,
                    height: 40,
                }}/>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input: {
        width: 310,
		height: 40,
		marginLeft: 15,
		marginRight: 20,
		padding: 10,
		borderRadius: 10,
		borderColor: 'grey',
        backgroundColor: 'white',
	},
    map: {
        height: '100%',
    },
    chipsScrollView: {
        position: 'absolute',
        top: 90,
        paddingHorizontal: 10,
    },
    chipsItem: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 8,
        paddingHorizontal: 20,
        marginHorizontal: 5,
        height: 35,
    }
})