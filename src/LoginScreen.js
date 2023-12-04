import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { theme } from '../core/theme'
/*
export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })

    const onLoginPressed = () => {
        const emailError = emailValidator(email.value)
        const passwordError = passwordValidator(password.value)
        if (emailError || passwordError) {
            setEmail({ ...email, error: emailError })
            setPassword({ ...password, error: passwordError })
            return
        }
        navigation.reset({
            index: 0,
            routes: [{ name: 'Dashboard' }],
        })
    }

    return (
        <Background>
            <BackButton goBack={navigation.goBack} />
            <Logo />
            <Header>Welcome back.</Header>
            <TextInput
                label="Email"
                returnKeyType="next"
                value={email.value}
                onChangeText={(text) => setEmail({ value: text, error: '' })}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
            />
            <TextInput
                label="Password"
                returnKeyType="done"
                value={password.value}
                onChangeText={(text) => setPassword({ value: text, error: '' })}
                error={!!password.error}
                errorText={password.error}
                secureTextEntry
            />
            <View style={styles.forgotPassword}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('ResetPasswordScreen')}
                >
                    <Text style=w{styles.forgot}>Forgot your password?</Text>
                </TouchableOpacity>
            </View>
            <Button mode="contained" onPress={onLoginPressed}>
                Login
            </Button>
            <View style={styles.row}>
                <Text>Don��t have an account? </Text>
                <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
                    <Text style={styles.link}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </Background>
    )
}

const styles = StyleSheet.create({
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24,
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    forgot: {
        fontSize: 13,
        color: theme.colors.secondary,
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
})
*/

// import * as React from 'react';
// import * as WebBrowser from 'expo-web-browser';
// import * as Google from 'expo-auth-session/providers/google';
// import { Button } from 'react-native';

// WebBrowser.maybeCompleteAuthSession();

// export default function LoginScreen() {
//     const [request, response, promptAsync] = Google.useAuthRequest({
//         expoClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
//         iosClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
//         androidClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
//         webClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
//     });

//     React.useEffect(() => {
//         if (response?.type === 'success') {
//             const { authentication } = response;
//         }
//     }, [response]);

//     return (
//         <Button
//             disabled={!request}
//             title="Login"
//             onPress={() => {
//                 promptAsync();
//             }}
//         />
//     );
// }

import { GoogleSignin } from '@react-native-google-signin/google-signin';
 
export default function LoginScreen({ navigation }) {
    const onGoogleButtonPress = async () => {
        const { idToken } = await GoogleSignin.signIn();
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        return auth().signInWithCredential(googleCredential);
    }

    return (
        <View style={StyleSheet.rootContainer}>
            <GoogleSigninButton onPress={() => onGoogleButtonPress()} />
        </View>
    )
}

