import React, { useEffect } from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './core/theme'
import {
    StartScreen,
    LoginScreen,
    RegisterScreen,
    ResetPasswordScreen,
    Dashboard,
} from './src'
import BottomTabNavigator from './src/BottomTabNavigator';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const Stack = createStackNavigator()

export default function App() {
    return (
        <Provider theme={theme}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="StartScreen"
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen name="StartScreen" component={StartScreen} />
                    <Stack.Screen name="LoginScreen" component={LoginScreen} />
                    <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                    {/* Integrate BottomTabNavigator as a screen */}
                    <Stack.Screen name="Dashboard" component={BottomTabNavigator} />
                    <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

const googleSigninConfigure = () => {
    GoogleSignin.configure({
      webClientId:
        '485093561661-s476qa0b9kueqni56u5lq9mjr9n78rsl.apps.googleusercontent.com',
    })
  }

useEffect(() => {
    googleSigninConfigure();
})