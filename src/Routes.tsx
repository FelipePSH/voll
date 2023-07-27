import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tabs from "./Tabs/Index";

import Cadastro from "./screens/Cadastro";
import Login from "./screens/Login";

const Tab = createNativeStackNavigator();

export default function Routes(){
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Login" component={Login} options={{headerShown:false}}/>
                <Tab.Screen name="Cadastro" component={Cadastro} options={{headerShown:false}}/>
                <Tab.Screen name="Tabs" component={Tabs} options={{headerShown:false}}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}