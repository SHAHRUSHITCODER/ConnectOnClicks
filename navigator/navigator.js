import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../src/screens/Home";

const Stack = createStackNavigator();

const Mainnav = ()=>
{
    return (
        <Stack.Navigator>
            <Stack.Screen name ='Home' component={Home}/>
            
        </Stack.Navigator>
     )
}
export default Mainnav;