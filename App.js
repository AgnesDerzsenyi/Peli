import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

let result;
let guesses;

export default function App() {

  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const init = () => {
    setResult('Guess a number between 1-100');
    guesses=0;
    formula = Math.floor(Math.random()*100)+1;
    console.log('Formula:', formula);
  }

  useEffect(() => {
    init();
  }, [])

  const makeGuess = () => {
    const guess = Number(input);
    console.log('Guess: ', guess);
    guesses++;
    if (guess < formula) {
      setResult('Your guess ' +guess+ ' is too low');
    } else if (guess > formula) {
      setResult ( 'Your guess ' + guess + ' is too high');
    } else {
      Alert.alert('You guessed the number in ' +guesses+ '  guesses');
      init();
    }
    setInput('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{result}</Text>
      <TextInput style={styles.input} value={input} keyboardType='number-pad' onChangeText={text => setInput(text)}></TextInput>
      <Button title ='Make Guess' onPress={makeGuess}></Button>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    width: '15%',
    margin: 10,
    fontSize: 15
  }
});
