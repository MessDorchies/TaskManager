import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function AddTask({addNewTask}) {

    const [newTask, setNewTask] = useState([])

    const onChange = (textValue) => {
        setNewTask(textValue)
    }

  return (
    <View style={styles.container}>
        <TextInput style={styles.input} placeholder='Add new task...' onChangeText={onChange}/>
        <TouchableOpacity style={styles.button} onPress={() => addNewTask(newTask)}>
            <Text style={styles.text}>Add Task</Text>
        </TouchableOpacity>
    </View>);
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#404040',
        alignItems: 'center'
    },
    button :{
        backgroundColor: '#cc5200',
        textAlign: 'center',
        borderRadius: 10,
        padding: 10,
        marginVertical: 15
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    input: {
        marginHorizontal: 10,
        borderRadius: 10,
        backgroundColor : 'white',
        alignSelf: 'stretch',
        padding: 10,
        fontSize: 22,
    }
})
