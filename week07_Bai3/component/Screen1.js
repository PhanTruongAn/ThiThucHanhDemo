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
export default function Screen1({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "column",
      }}
    >
      <Text style={{ fontSize: 30, fontWeight: 700, alignSelf: "center" }}>
        Welcome to Cafe world
      </Text>
      <Image
        source={require("./img/Home.png")}
        style={{ width: 280, height: 80, alignSelf: "center", borderRadius: 8 }}
      ></Image>
      <Image
        source={require("./img/Home1.png")}
        style={{ width: 280, height: 80, alignSelf: "center", borderRadius: 8 }}
      ></Image>
      <Image
        source={require("./img/Home.png")}
        style={{ width: 280, height: 80, alignSelf: "center", borderRadius: 8 }}
      ></Image>
      <TouchableOpacity
        style={{
          width: 340,
          height: 50,
          backgroundColor: "#00BDD6",
          alignSelf: "center",
          justifyContent: "center",
          borderRadius: 7,
        }}
        onPress={() => navigation.navigate("Screen2")}
      >
        <View
          style={{
            fontSize: 17,
            fontWeight: 500,
            color: "white",
            alignSelf: "center",
          }}
        >
          GET STARTED
        </View>
      </TouchableOpacity>
    </View>
  );
}
