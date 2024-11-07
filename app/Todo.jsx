import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import { firestore } from '../firebaseConfig';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import styles from '../styles/styles';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const user = useSelector((state) => state.user);

  const renderItem = ({ item }) => (
    <Pressable style={styles.todoItem}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <View>

          <Text style={styles.todoTitle}>{item.title}</Text>
          <Text style={styles.todoText}>{item.text}</Text>

        </View>
      </View>
    </Pressable>
  );


  const todoRef = query(collection(firestore, 'todos'), where('userId', '==', user.userId));

  const subscriber = onSnapshot(todoRef, {
    next: (snapshot) => {
      const todos = [];
      snapshot.docs.forEach((doc) => {
        todos.push({
          id: doc.id,
          ...doc.data()
        });
      });
  
      setTodos(todos);
    }
  });


  useEffect(() => {

   
    return () => subscriber();

  }, []);

  return (
    <View style={{ paddingTop: 50, ...styles.container }}>
      <Text style={styles.title}>My Todos</Text>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Todo;
