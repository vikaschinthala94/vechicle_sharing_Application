import * as React from 'react';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';

import DriverScreen from '../screens/DriverScreen';

const stack = createStackNavigator();
export function HomeStack() {
    return(
        <stack.Navigator>
            <stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options ={{headerShown:false}}
            />
            <stack.Screen
            name="DriverScreen"
            component={DriverScreen}
            options ={{headerShown:false}}
            />
        </stack.Navigator>
    )
    
}
