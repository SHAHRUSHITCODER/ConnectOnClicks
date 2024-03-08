import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../src/screens/Login";
import SignUp from "../src/screens/SignUp";
import Home from "../src/screens/Home";
import Upload from "../src/screens/Upload";
import FamilyDetails from "../src/screens/FamilyDetails";

const Stack = createStackNavigator();

const AuthNavigator = ()=>
{
    return (
        <Stack.Navigator initialRouteName ='Login'>
              <Stack.Screen name="Home" component={Home}  />
              <Stack.Screen name="Upload" component={Upload} options={{ headerShown: false }}/>
              <Stack.Screen name="FamilyDetails" component={FamilyDetails} options={{ headerShown: false }}/>
            <Stack.Screen name ='Login' component={Login} />
            <Stack.Screen name ='SignUp' component={SignUp} options={{ headerShown: false }}/>
        </Stack.Navigator>
     )
}
export default AuthNavigator;