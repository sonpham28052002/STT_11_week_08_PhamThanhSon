import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import screen1 from './screen/screen1';
import screen2 from './screen/screen2';
import screen3 from './screen/screen3';
import screen4 from './screen/screen4';

var Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={screen1} name='welcome' options={{headerShown:false}}/>
        <Stack.Screen component={screen2} name='Shops Near Me'/>
        <Stack.Screen component={screen3} name='Drinks'/>
        <Stack.Screen component={screen4} name='Your orders'/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
