import React, { useState, useEffect } from 'react';
import { View, TextInput, Text } from 'react-native';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setUserCredentials } from '../store/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/styles';
import ButtonApp from '../components/ButtonApp';

const SignUp = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const [error, setError] = useState(null);


    const handleSignup = () => {
        setError(null);
        if (email.trim() && password.trim()) {

            if(password.length < 6){
                setError('Password must be at least 6 characters');
                return;
            }

            if(!email.includes('@') || !email.includes('.')){
                setError('Invalid email');
                return;
            }


            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    dispatch(setUserCredentials({ email: user.email, password: password, userId: user.uid, isAuth: true  }))
                    ;
                    props.navigation.replace('Todo');
                })
                .catch((error) => {
                    setError(error.message);
                });

        }
    };

    useEffect(() => {

        //check if user is already logged in
        if(user.isAuth){
            props.navigation.replace('Todo');
        }


        return () => {
            setEmail('');
            setPassword('');
            setError(null);
        };
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome!</Text>

            <Text style={styles.text}>Email</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <Text style={styles.text}>Password</Text>
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <ButtonApp style={styles.button} title="Signup" onPress={handleSignup} />

            {error &&
                <View style={styles.subContainer}>
                    <Text style={styles.error}>{error}</Text>
                </View>
            }
        </View>
    );
};


export default SignUp;
