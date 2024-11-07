import styles from "../styles/styles";
import React from 'react'
import { Text, Pressable } from 'react-native'

export default function ButtonApp({ title, onPress }) {

    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    )
}