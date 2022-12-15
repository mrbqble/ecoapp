import React from 'react';
import { createNativeDrawerNavigator } from '@react-navigation/drawer';

import Map from './MapScreen';
import Profile from './ProfileScreen';

const Drawer = createNativeDrawerNavigator();

const AppStack = () => {
    return (
        <Drawer.Navigator screenOptions = {{headerShown: false}}>
			<Drawer.Screen name = "Map" component = {Map}/>
			<Drawer.Screen name = "Profile" component={Profile}/>
		</Drawer.Navigator>
    );
};

export default AppStack;