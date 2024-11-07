import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './app/Welcome';
import Login from './app/Login';
import Todo from './app/Todo';
import AddTodo from './app/AddTodo';
import SignUp from './app/SignUp';
import store from './store/store';

const Stack = createStackNavigator();

const headerOptions = {
  headerStyle: {
    backgroundColor: '#F38586',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={Welcome} options={
            { headerShown: false }
          } />
          
          <Stack.Screen name="Login" component={Login} options={headerOptions}/>
          <Stack.Screen name="SignUp" component={SignUp} options={headerOptions}/>

          <Stack.Screen name="Todo" component={Todo} options={
            headerOptions
          } />
          <Stack.Screen name="AddTodo" component={AddTodo} options={
            { title: 'Add Todo',
              ...headerOptions
             }
          } />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}