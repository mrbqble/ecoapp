import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, Image, TouchableOpacity, View, FlatList } from 'react-native';

export default function ProfileScreen(props) {

    const [collected, setList] = useState([
        {
            image: require('../assets/plastic.png'),
            number: '50.5',
            title: 'кг пластика',
            index: 1
        },
        {
            image: require('../assets/bio.png'),
            number: '20',
            title: 'кг биоотходов',
            index: 2
        },
        {
            image: require('../assets/metall.png'),
            number: '12',
            title: 'кг металла',
            index: 3
        },
        {
            image: require('../assets/paper.png'),
            number: '10.3',
            title: 'кг макулатуры',
            index: 4
        },
        {
            image: require('../assets/glass.png'),
            number: '5',
            title: 'кг стекла',
            index: 5
        },
        {
            image: require('../assets/battery.png'),
            number: '20',
            title: 'батареек',
            index: 6
        },
    ])

    return (
        <SafeAreaView
            style = {{
                flex: 1,
                paddingTop: 20,
                paddingHorizontal: 20,
            }}
        >
            <View
                style = {{
                    alignItems: 'center',
                    marginBottom: 40
                }}
            >
                <TouchableOpacity>
                    <Image
                        source = {require('../assets/profile.png')}
                        style = {{
                            width: 150,
                            height: 150,
                            marginBottom: 20
                        }}
                    />
                </TouchableOpacity>    
                <Text
                    style = {{
                        fontSize: 18,
                    }}
                >Bubblegum</Text>
            </View>
            <TouchableOpacity
                style = {{
                    marginBottom: 10,
                    borderBottomWidth: 1,
                    paddingBottom: 5,
                    borderBottomColor: '#D3D3D3'
                }}
            >
                <Text
                    style = {{
                        fontSize: 16
                    }}
                >+7 747 255 2401</Text>
                <Text 
                    style = {{
                        color: '#C4C4C4'
                    }}
                >Изменить номер телефона</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style = {{
                    marginBottom: 10,
                    borderBottomWidth: 1,
                    paddingBottom: 5,
                    borderBottomColor: '#D3D3D3'
                }}
            >
                <Text
                    style = {{
                        fontSize: 16
                    }}
                >Экогерой</Text>
                <Text 
                    style = {{
                        color: '#C4C4C4'
                    }}
                >Статус</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style = {{
                    marginBottom: 10,
                    borderBottomWidth: 1,
                    paddingBottom: 5,
                    borderBottomColor: '#D3D3D3'
                }}
            >
                <Text
                    style = {{
                        fontSize: 16
                    }}
                >Шымкент</Text>
                <Text 
                    style = {{
                        color: '#C4C4C4'
                    }}
                >Город</Text>
            </TouchableOpacity>
            <View>
                <Text
                    style = {{
                        fontSize: 16
                    }}
                >Всего собрано:</Text>
                <FlatList
                    numColumns = {3}
                    data = {collected}
                    renderItem = {({item}) => (
                        <View key = {item.index}
                            style = {{
                                alignItems:'center',
                                padding: 20,
                            }}
                        >
                            <Image 
                                source = {item.image}
                                style = {{
                                    width: 80,
                                    height: 80
                                }}
                            />
                            <Text
                                style = {{
                                    fontSize: 22,
                                    color: '#158917'
                                }}
                            >{item.number}</Text>
                            <Text
                                style = {{
                                    color: '#6C6C6C',
                                    fontSize: 12
                                }}
                            >{item.title}</Text>
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    );
}