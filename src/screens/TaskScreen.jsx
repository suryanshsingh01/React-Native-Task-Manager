import React, { useReducer, useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskItem from '../components/TaskItem';

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case 'GET':
      return action.payload;
    case 'ADD':
      return [...state, action.payload];
    case 'DELETE':
      return state.filter(task => task.id !== action.payload);
    case 'TOGGLE':
      return state.map(task =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    default:
      return state;
  }
}

export default function TaskScreen() {
  const [tasks, dispatch] = useReducer(reducer, initialState);
  const [taskTitle, setTaskTitle] = useState('');

  // Load tasks from AsyncStorage on start
  useEffect(() => {
    const loadTasks = async () => {
      try {
        const data = await AsyncStorage.getItem('TASKS');
        if (data) {
          dispatch({ type: 'GET', payload: JSON.parse(data) });
        }
      } catch (error) {
        console.log('Failed to load tasks', error);
      }
    };
    loadTasks();
  }, []);

  // Save tasks to AsyncStorage on change
  useEffect(() => {
    AsyncStorage.setItem('TASKS', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (!taskTitle.trim()) {
      Alert.alert('Please enter a task title');
      return;
    }
    const newTask = {
      id: Date.now().toString(),
      title: taskTitle.trim(),
      completed: false,
      timestamp: new Date().toISOString(),
    };
    dispatch({ type: 'ADD', payload: newTask });
    setTaskTitle('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Task Manager</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={taskTitle}
          onChangeText={setTaskTitle}
          placeholderTextColor={'black'}
          placeholder="Enter task..."
          style={styles.input}
        />
        <Button title="Add" style={{fontFamily:'CaveatSemiBold'}}onPress={handleAddTask} />
      </View>

      {tasks.length === 0 ? (
        <Text style={styles.emptyText}>No tasks available</Text>
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TaskItem item={item} dispatch={dispatch} />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16, 
    backgroundColor: '#BCCECF',
  },
  heading: { 
   fontSize: 24,
   marginBottom: 10, 
   fontFamily: 'CaveatBold',
  },
  inputContainer: {
   flexDirection: 'row',
   marginBottom: 10 
  },
  input: { 
    flex: 1,
    borderWidth: 1, 
    borderColor: 'black',
    borderRadius: 10, 
    padding: 8, 
    marginRight: 8, 
    fontFamily:'CaveatSemiBold',
    
  },
  emptyText: { 
    textAlign: 'center', 
    marginTop: 20, 
    fontSize: 16,
     color: 'black',
    fontFamily:'CavetRegular'
   },
});
