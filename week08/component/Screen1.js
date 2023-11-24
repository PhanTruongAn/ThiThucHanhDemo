import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
const Screen1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("./image/noteandpen.PNG")}
        style={{ width: 271, height: 271, marginTop: 50 }}
      ></Image>
      <Text
        style={{
          width: 390,
          height: 72,
          marginTop: 20,
          textAlign: "center",
          color: "#8353E2",
          fontFamily: "Epilogue",
          fontSize: 24,
          fontWeight: 700,
        }}
      >
        {" "}
        MANAGE YOUR{<br></br>} TASK{" "}
      </Text>
      <View style={styles.viewEmail}>
        <Image
          source={require("./image/IconEmail.PNG")}
          style={{ width: 20, height: 20, left: 10 }}
        ></Image>
        <TextInput
          placeholder="Enter Your Name"
          style={{
            marginLeft: 30,
            width: 250,
            height: 43,
            fontSize: 18,
            fontWeight: 400,
            color: "gray",
            outline: "none",
          }}
        ></TextInput>
      </View>
      <Pressable
        style={styles.btn}
        onPress={() => navigation.navigate("Screen2")}
      >
        <Text
          style={{
            alignSelf: "center",
            fontWeight: 600,
            fontSize: 20,
            color: "white",
          }}
        >
          Get Started
        </Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "column",
  },
  viewEmail: {
    width: 334,
    height: 43,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 15,
    borderColor: "grey",
    borderWidth: 2,
    marginTop: 40,
  },
  btn: {
    marginTop: 40,
    width: 190,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00BDD6",
    color: "white",
    borderRadius: 15,
  },
});
export default Screen1;
