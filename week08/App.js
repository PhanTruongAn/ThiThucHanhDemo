import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Screen1 from "./component/Screen1";
import Screen2 from "./component/Screen2";
import Screen3 from "./component/Screen3";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import store from "./redux/store";
import { Provider } from "react-redux";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Screen1" component={Screen1} />
          <Stack.Screen name="Screen2" component={Screen2} />
          <Stack.Screen name="Screen3" component={Screen3} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <Screen2 /> */}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
