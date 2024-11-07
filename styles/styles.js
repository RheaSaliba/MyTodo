import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        padding: 16,
        backgroundColor: '#13262F',
    },
    subContainer: {
        // flexDirection: 'row',
        justifyContent: 'center',
        padding: 16,
    },
    containerCenter: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 16,
        padding: 16,
    },

    title: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 8,
        color: '#fff',
    },
    error: {
        color: 'red',
        textAlign: 'center',
    },
    image: {
        width: 200,
        height: undefined,
        aspectRatio: 0.8,
    },
    text: {
        fontSize: 20,
        marginVertical: 16,
        color: '#fff',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 4,
        elevation: 3,
        textAlign: 'center',
        backgroundColor: '#F38586',
      },
    buttonText: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#fff',
    },
    todoItem: {
        backgroundColor: '#F38586',
        padding: 20,
        marginVertical: 8,
        borderRadius: 10,
    },
    todoTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    todoText: {
        fontSize: 18,
    },

});

export default styles;