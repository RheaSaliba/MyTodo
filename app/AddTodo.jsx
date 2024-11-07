import React, { useEffect, useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from '../styles/styles';
import ButtonApp from '../components/ButtonApp';
import { firestore } from '../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import { useSelector } from 'react-redux';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const user = useSelector((state) => state.user);

  const handleAddTodo = async () => {
    if (!title || !text) {
      alert('Please fill in all fields');
      return;
    }
    try {
      const data = {
        title,
        text,
        userId: user.userId,
        createdAt: new Date().toDateString(),
      };

      addDoc(collection(firestore, 'todos'), data);

      alert('Todo added successfully');
      setTitle('');
      setText('');
    } catch (error) {
      alert('Error adding todo', error.message);
      console.log(error);
    }
  };

  useEffect(() => {
    setTitle('');
    setText('');
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />
      <Text style={styles.title}>Write your todo details</Text>
      <TextInput
        style={{
          ...styles.input,
          height: 150,
          textAlignVertical: 'top',
        }}
        value={text}
        onChangeText={setText}
      />
      <ButtonApp style={styles.button} title="Add" onPress={handleAddTodo} />
    </View>
  );
};

export default AddTodo;
