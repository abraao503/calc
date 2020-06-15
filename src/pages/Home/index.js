import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { List } from '../../context/List';

import styles from './styles';

export default function Home(){
  const { list, setList } = useContext(List);
  const navigation = useNavigation();

  const [input, setInput] = useState('');
  const [operationFinished, setOperationFinished] = useState(false);

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
    setOperationFinished(true);
  }

  function clickButton(value){
    if(operationFinished){
      if(value === '+' || value === '-' || value === '*' || value === '/'){
        setInput(input + value);
      }
      else{
        setInput(value);
      }
      
      setOperationFinished(false);
    }
    else{
      setInput(input + value);
    }
  }

  function handleNavigateToMenu(){
    navigation.navigate('OperationsList');
  }

  return (
    <View style={styles.container}>
      <View style={styles.calculator}>
        <TextInput
          style={styles.input}
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
              style={styles.button}><Text style={styles.buttonText}>7</Text></TouchableOpacity>
            <TouchableOpacity
              onPress={() => clickButton('8')}
              style={styles.button}><Text style={styles.buttonText}>8</Text></TouchableOpacity>
            <TouchableOpacity
              onPress={() => clickButton('9')}
              style={styles.button}><Text style={styles.buttonText}>9</Text></TouchableOpacity>
            <TouchableOpacity
              onPress={() => clickButton('*')}
              style={styles.button}><Text style={styles.buttonText}>X</Text></TouchableOpacity>
          </View>
          <View style={styles.line}>
            <TouchableOpacity
              onPress={() => clickButton('4')}
              style={styles.button}><Text style={styles.buttonText}>4</Text></TouchableOpacity>
            <TouchableOpacity
              onPress={() => clickButton('5')}
              style={styles.button}><Text style={styles.buttonText}>5</Text></TouchableOpacity>
            <TouchableOpacity
              onPress={() => clickButton('6')}
              style={styles.button}><Text style={styles.buttonText}>6</Text></TouchableOpacity>
            <TouchableOpacity
              onPress={() => clickButton('-')}
              style={styles.button}><Text style={styles.buttonText}>-</Text></TouchableOpacity>
          </View>
          <View style={styles.line}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => clickButton('1')}
            ><Text style={styles.buttonText}>1</Text></TouchableOpacity>
            <TouchableOpacity
              onPress={() => clickButton('2')}
              style={styles.button}><Text style={styles.buttonText}>2</Text></TouchableOpacity>
            <TouchableOpacity
              onPress={() => clickButton('3')}
              style={styles.button}><Text style={styles.buttonText}>3</Text></TouchableOpacity>
            <TouchableOpacity
              onPress={() => clickButton('+')}
              style={styles.button}><Text style={styles.buttonText}>+</Text></TouchableOpacity>
          </View>
          <View style={styles.line}>
            <TouchableOpacity
              style={styles.button}
              onPress={handleCleanInput}
            ><Text style={styles.buttonText}>Limpar</Text></TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleSetResult()}
            ><Text style={styles.buttonText}>=</Text></TouchableOpacity>
            <TouchableOpacity
              onPress={() => clickButton('1')}
              style={styles.button}><Text style={styles.buttonText}>0</Text></TouchableOpacity>
            <TouchableOpacity
              onPress={() => clickButton('/')}
              style={styles.button}><Text style={styles.buttonText}>/</Text></TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.openMenu}
        onPress={handleNavigateToMenu}
      >
        <Text style={styles.openMenuText}>ABRIR MENU</Text>
      </TouchableOpacity>
    </View>
  )
}
