import { View, Text, StyleSheet, Button } from 'react-native'

const MainPage = ({ navigation }) => {
  
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Bilin-Guess!</Text>
        <Button 
          onPress={() => {navigation.navigate("New Game")}}
          title="New Game"
        />
      </View>
    </>
  );
  
}

export default MainPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20
  }
});