import React from 'react';
import { Text, View, Image } from 'react-native';
import image from './../assets/logo-nobg.png';
import styles from '../styles/styles';
import { useDispatch, useSelector } from 'react-redux';
import { clearUserCredentials } from '../store/userSlice';
import { auth } from '../firebaseConfig';
import ButtonApp from '../components/ButtonApp';

export default function Welcome({ navigation }) {

  const user = useSelector((state) => state.user);
  
  const dispatch = useDispatch();

  const handleLogout = () => {
    
    try{
      auth.signOut();

      dispatch(clearUserCredentials());
      navigation.replace('Welcome');
    }catch(error){
      alert(error.message);
    }

  }


  if (user.isAuth) {

    return (
      <View style={styles.container}>
        <View style={styles.containerCenter}>
          <Image source={image} style={styles.image} />
        </View>

        <Text style={styles.title}>Welcome!</Text>
        <View style={styles.containerCenter}>
          <Text style={styles.text}>Manage your todos with ease</Text>
        </View>
        <View style={styles.subContainer}>
          <ButtonApp style={styles.button} title="Go to Todos" onPress={() => navigation.navigate('Todo')} />
        </View>
        <View style={styles.subContainer}>
          <ButtonApp style={styles.button} title="Add Todo" onPress={() => navigation.navigate('AddTodo')} />
        </View>


        <View style={styles.subContainer}>
          <ButtonApp style={styles.button} title="Logout" onPress={handleLogout} />
        </View>

      </View>
    )

  }


  return (
    <View style={styles.container}>
      <View style={styles.containerCenter}>
        <Image source={image} style={styles.image} />
      </View>

      <Text style={styles.title}>Welcome to MyTodo App!</Text>

      <View style={styles.containerCenter}>
        <Text style={styles.text}>Manage your todos with ease</Text>
      </View>
      
      <ButtonApp style={styles.button} title="Login" onPress={() => navigation.navigate('Login')} />

      <View style={styles.containerCenter}>

        <Text style={styles.text}>Don't have an account?</Text>
      </View>

      <ButtonApp style={styles.button} title="Sign Up" onPress={() => navigation.navigate('SignUp')} />

    </View>
  );
}

