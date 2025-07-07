import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function TaskItem({ item, dispatch }) {
  return (
    <View style={styles.item}>
      <Text
        style={[
          styles.title,
          { textDecorationLine: item.completed ? 'line-through' : 'none' },
        ]}
      >
        {item.title}
      </Text>
      <View style={styles.actions}>
        <Button
          fontFamily={'Caveat'}
          title={item.completed ? 'Undo' : 'Done'}
          onPress={() => dispatch({ type: 'TOGGLE', payload: item.id })}
        />
        <Button
          title="Delete"
          color="red"
          onPress={() => dispatch({ type: 'DELETE', payload: item.id })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 12,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 2,
    borderColor: 'black',
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontFamily: 'CaveatMedium',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
});
