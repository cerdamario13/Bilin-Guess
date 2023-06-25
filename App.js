import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from './screens/MainPage';
import NewGame from './screens/NewGame';

const Stack = createNativeStackNavigator();

export default function App() {
      
  return (
    
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main Page"
            component={MainPage}
            options={{title: "Bilin-guess"}}
          />
          <Stack.Screen
            name="New Game"
            component={NewGame}
            options={{title: "New Game"}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
    
  );
}
