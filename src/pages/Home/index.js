import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { List } from '../../context/List';

import styles from './styles';

export default function Home(){
  const { list, setList } = useContext(List);
  const navigation = useNavigation();

  const [input, setInput] = useState('');

  function handleCleanInput(){
    setInput('');
  }

  function calculateExpression(expression){
    return new Function('return ' + expression)();
  }

  function handleSetResult(){
    const result = calculateExpression(input);
    setList([...list, input+` = ${result.toString()}`]);
    setInput(result.toString());
  }

  function clickButton(value){
    setInput(input + value)
  }

  function handleNavigateToMenu(){
    navigation.navigate('OperationsList');
  }

  return (
    <View style={styles.container}>
      <View style={styles.calculator}>
        <TextInput
          keyboardType='decimal-pad'
          placeholderTextColor="#FFF"
          value={input}
          onChangeText={setInput}
          placeholder="Entre com uma operação..."
        >
        </TextInput>
        <View style={styles.grid}>
          <View style={styles.line}>
            <TouchableOpacity
              onPress={() => clickButton('7')}
              style={styles.button}><Text>7</Text></TouchableOpacity>
            <TouchableOpacity
              onPress={() => clickButton('8')}
              style={styles.button}><Text>8</Text></TouchableOpacity>
            <TouchableOpacity
              onPress={() => clickButton('9')}
              style={styles.button}><Text>9</Text></TouchableOpacity>
            <TouchableOpacity
              onPress={() => clickButton('*')}
              style={styles.button}><Text>X</Text></TouchableOpacity>
          </View>
          <View style={styles.line}>
            <TouchableOpacity
              onPress={() => clickButton('4')}
              style={styles.button}><Text>4</Text></TouchableOpacity>
            <TouchableOpacity
              onPress={() => clickButton('5')}
              style={styles.button}><Text>5</Text></TouchableOpacity>
            <TouchableOpacity
              onPress={() => clickButton('6')}
              style={styles.button}><Text>6</Text></TouchableOpacity>
            <TouchableOpacity
              onPress={() => clickButton('-')}
              style={styles.button}><Text>-</Text></TouchableOpacity>
          </View>
          <View style={styles.line}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => clickButton('1')}
            ><Text>1</Text></TouchableOpacity>
            <TouchableOpacity
              onPress={() => clickButton('2')}
              style={styles.button}><Text>2</Text></TouchableOpacity>
            <TouchableOpacity
              onPress={() => clickButton('3')}
              style={styles.button}><Text>3</Text></TouchableOpacity>
            <TouchableOpacity
              onPress={() => clickButton('+')}
              style={styles.button}><Text>+</Text></TouchableOpacity>
          </View>
          <View style={styles.line}>
            <TouchableOpacity
              style={styles.button}
              onPress={handleCleanInput}
            ><Text>Limpar</Text></TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleSetResult()}
            ><Text>=</Text></TouchableOpacity>
            <TouchableOpacity
              onPress={() => clickButton('1')}
              style={styles.button}><Text>0</Text></TouchableOpacity>
            <TouchableOpacity
              onPress={() => clickButton('/')}
              style={styles.button}><Text>/</Text></TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={handleNavigateToMenu}
        ><Text>ABRIR MENU</Text></TouchableOpacity>
    </View>
  )
}
