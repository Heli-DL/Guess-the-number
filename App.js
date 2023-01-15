import { StatusBar } from 'expo-status-bar';
import react, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

const number = Math.floor(Math.random() * 100) + 1;

export default function App() {
  const [text, setText] = useState('Guess a number between 1-100');
  const [guess, setGuess] = useState(0);
  const [count, setCount] = useState(0);

  const buttonPressed = () => {  
    if (guess > 100 && guess < 1){
      setText('Guess a number between 1-100');
    } else if (guess < number) {
      setText('Your guess ' + guess + ' is too low' );
      setCount(count + 1);
    } else if (guess > number) {
      setText('Your guess ' + guess + ' is too high');
      setCount(count + 1);
    } else if (guess == number) {
      Alert.alert('You guessed the number in : '+ count + ' guesses');
    }
    setGuess('');
  }

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <TextInput style={{width:200, borderColor: 'gray', borderWidth:1, marginTop: 10}}onChangeText={guess => setGuess(Number(guess))}  value={guess} keyboardType={'numeric'}/>
      <View style={styles.button}>
        <Button onPress={buttonPressed} title="Make guess" />
      </View>
      <StatusBar style="auto" />
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
  button: {
    margin: 10,
  }
});
