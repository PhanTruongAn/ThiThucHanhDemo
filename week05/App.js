import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Frame1 from './components/Frame1';
import Frame2 from './components/Frame2';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Frame1" component={Frame1} />
      <Stack.Screen name="Frame2" component={Frame2} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}



