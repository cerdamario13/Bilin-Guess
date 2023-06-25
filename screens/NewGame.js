import { View, Text, StyleSheet } from 'react-native'
import { useEffect } from 'react';

const NewGame = () => {
  
  //generate the words
  const randomWord = () => {
    var keys = Object.keys(wordDb);
    console.log(wordDb[keys[keys.length * Math.random() << 0]])
    return wordDb[keys[keys.length * Math.random() << 0]];
  }
  
  
  useEffect(() => {
    randomWord();
  }, [])
  
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Como se dice... </Text>
      </View>
    </>
  );
  
}

export default NewGame;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    padding: 20
  }
});

//tmp word db 
const wordDb = {
  "Submarine": {
    "Spanish": "Submarino",
    "Variations": ["Sumergible"]
  },
  "Aliance": {
    "Spanish": "Alianza",
    "Variations": []
  },
  "Ooze": {
    "Spanish": "Rezumar",
    "Variations": []
  }
}