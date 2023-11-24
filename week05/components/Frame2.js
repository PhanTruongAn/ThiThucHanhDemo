import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  Button,
  TextInput,
} from "react-native";
import * as React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Image } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Frame2({ navigation }) {
  var [image, setImage] = useState(require("./image/xanh.jpg"));
  const selectImage = (image) => {
    navigation.navigate("Frame1", { selectedImage: image });
  };
  return (
    <View style={styles.container}>
      <View style={styles.viewHinh}>
        <Image
          source={image}
          style={{ width: 112, height: 132 }}
          resizeMode="contain"
        ></Image>
        <Text style={styles.TextName}>
          Điện Thoại Vsmart Joy 3 Hàng chính hãng
        </Text>
      </View>
      <View style={styles.ChonMau}>
        <Text style={styles.TieuDe}>Chọn một màu bên dưới:</Text>
        <Pressable
          onPress={() => {
            setImage(require("./image/trang.jpg"));
          }}
          style={{
            marginTop: 10,
            width: 85,
            height: 80,
            backgroundColor: "#C5F1FB",
          }}
        ></Pressable>
        <Pressable
          onPress={() => {
            setImage(require("./image/do.jpg"));
          }}
          style={{
            marginTop: 10,
            width: 85,
            height: 80,
            backgroundColor: "#F30D0D",
          }}
        ></Pressable>
        <Pressable
          onPress={() => {
            setImage(require("./image/den.jpg"));
          }}
          style={{
            marginTop: 10,
            width: 85,
            height: 80,
            backgroundColor: "#000000",
          }}
        ></Pressable>
        <Pressable
          onPress={() => {
            setImage(require("./image/xanh.jpg"));
          }}
          style={{
            marginTop: 10,
            width: 85,
            height: 80,
            backgroundColor: "#234896",
          }}
        ></Pressable>
        <Pressable
          style={styles.btnXONG}
          onPress={() =>
            navigation.navigate("Frame1", { selectedImage: image })
          }
        >
          XONG
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    width: 360,
    height: 640,
    flexDirection: "column",
  },
  viewHinh: {
    width: "100%",
    height: "23%",
    marginLeft: 4,
    flexDirection: "row",
    backgroundColor: "white",
  },
  TextName: {
    marginLeft: 10,
    width: 164,
    height: 36,
    fontSize: 15,
    fontWeight: 400,
  },
  ChonMau: {
    width: "100%",
    height: "77%",
    backgroundColor: "grey",
    alignItems: "center",
    flexDirection: "column",
  },
  TieuDe: {
    width: 250,
    height: 21,
    fontSize: 18,
    fontWeight: 400,
    marginTop: 8,
    marginLeft: -80,
  },
  btnXONG: {
    height: 44,
    width: 326,
    borderRadius: 10,
    marginTop: 10,
    color: "white",
    backgroundColor: "blue",
    fontSize: 15,
    fontWeight: 700,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});