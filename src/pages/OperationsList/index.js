import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { List } from '../../context/List';

import styles from './styles';

export default function OperationsList(){
  const { list, setList } = useContext(List);

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={list}
          keyExtractor={(x, i) => i.toString()}
          renderItem={(item) => (
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>{item.item}</Text>
            </View>
          )}
          />
      </View>
    </View>
  )
}
