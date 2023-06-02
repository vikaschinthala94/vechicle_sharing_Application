import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
//import { HomeScreen } from './stackNavigators';
import { HomeStack } from './stackNavigators';
import { Icon } from 'react-native-elements';
import { colors } from '../global/styles';

const Drawer = createDrawerNavigator()

export default function DrawerNavigator(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen
            name="HomeStack"
            component={HomeStack}
            options={{
                title:"Home",
                drawerIcon:({focussed,size})=>
                <Icon
                type="material-community"
                name="home"
                color={focussed?'#7cc':colors.grey2}
                
                />,
            headerShown  :false 
            }}
            
            />
        </Drawer.Navigator>
    )
}