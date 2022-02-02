import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import AddTask from './AddTask';

export default function TaskList() {

    const [task, setTask] = useState([]);

    const addNewTask= (newTask) => {
            setTask( prevTaskList => {
                return [...prevTaskList, {id: task.length + 1 , text: newTask}]
            })
        }    

    const deleteTask = (id) => {
        setTask( prevTaskList => {
            return prevTaskList.filter(items => items.id != id)
        })
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity onLongPress={() => deleteTask(item.id)}>
            <Text style={styles.text}>{item.text}</Text>
        </TouchableOpacity>
      );

  return (
      <View style={styles.container}>
        <AddTask addNewTask={addNewTask} />
        <FlatList
            data={task}
            renderItem={renderItem}
            keyExtractor={task => task.id}
            scrollEnabled={true}
        /> 
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#404040',
        alignSelf: 'stretch'
    },
    text: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#b3b3b3',
        padding: 10,
        borderRadius: 25,
        marginVertical: 8,
        marginHorizontal: 16,
        fontSize: 16, 
        fontStyle: 'italic',
    }
})