import React, { useState, useEffect } from 'react';
import { View, Text, TextInput} from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { setUserCredentials } from '../store/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/styles';
import ButtonApp from '../components/ButtonApp';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const [error, setError] = useState(null);

    const handleSubmit = () => {
        setError(null);

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                
                dispatch(setUserCredentials({ email: user.email, password: password, userId: user.uid, isAuth: true }));
                props.navigation.replace('Todo');
            })
            .catch((error) => {
                setError(error.message);
            });

    };

    useEffect(() => {

        //check if user is already logged in
        if(user.isAuth){
            props.navigation.replace('Todo');
        }

        setEmail('');
        setPassword('');
        setError(null);

       
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Glad to have you around!</Text>

            <Text style={styles.text}>Email</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
            />
            <Text style={styles.text}>Password</Text>
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <ButtonApp style={styles.button} title="Login" onPress={handleSubmit} />

            {error &&
            <View style={styles.subContainer}>
                <Text style={styles.error}>{error}</Text>
            </View>
            }
        </View>
    );
};



export default Login;
