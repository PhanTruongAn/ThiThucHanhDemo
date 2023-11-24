import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Pressable,
} from "react-native";
import * as React from "react";

import Icon from "react-native-vector-icons/FontAwesome";
import { Image } from "react-native";
import { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
export default function Frame1({ navigation }) {
  const route = useRoute();
  const [selectedImage, setSelectedImage] = useState(
    route.params ? route.params.selectedImage : require("./image/xanh.jpg")
  );

  useEffect(() => {
    if (route.params && route.params.selectedImage) {
      setSelectedImage(route.params.selectedImage);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <Image
        source={selectedImage}
        style={{ width: 301, height: 361 }}
        resizeMode="contain"
      ></Image>
      <Text style={styles.tenDienThoai}>
        Điện Thoại Vsmart Joy 3 - Hàng chính hãng
      </Text>
      <View style={styles.review}>
        <View style={styles.start}>
          <Icon name="star" size={20} color="gold" />
          <Icon name="star" size={20} color="gold" style={{ marginLeft: 5 }} />
          <Icon name="star" size={20} color="gold" style={{ marginLeft: 5 }} />
          <Icon name="star" size={20} color="gold" style={{ marginLeft: 5 }} />
          <Icon name="star" size={20} color="gold" style={{ marginLeft: 5 }} />
        </View>
        <Text style={styles.textDanhGia}>(Xem 828 đánh giá)</Text>
      </View>
      <View style={styles.viewGia}>
        <Text style={styles.gia}>1.790.000 đ</Text>
        <Text style={styles.giamGia}>1.790.000 đ</Text>
      </View>
      <View style={styles.viewHoanTien}>
        <Text style={styles.hoantien}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <Icon
          name="question-circle-o"
          size={30}
          style={{ marginLeft: 20 }}
        ></Icon>
      </View>
      <Pressable
        style={styles.btnChonMau}
        onPress={() => navigation.navigate("Frame2")}
      >
        <Text style={styles.text1}>4 MÀU-CHỌN MÀU</Text>
        <Text style={styles.text2}> &gt; </Text>
      </Pressable>

      <button style={styles.btnChonMua}>CHỌN MUA</button>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: 360,
    height: 640,
    flexDirection: "column",
    alignItems: "center",
  },
  tenDienThoai: {
    width: 288,
    height: 18,
    fontSize: 15,
    fontWeight: 400,
    marginTop: 5,
  },
  review: {
    width: "100%",
    height: 20,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  start: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 44,
  },
  textDanhGia: {
    marginLeft: 40,
    fontSize: 15,
    fontWeight: 400,
  },
  viewGia: {
    width: "100%",
    height: 30,
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  gia: {
    marginLeft: 48,
    fontSize: 18,
    fontWeight: 700,
  },
  giamGia: {
    fontSize: 15,
    fontWeight: 700,
    marginLeft: 30,
    color: "grey",
    textDecorationLine: "line-through",
  },
  viewHoanTien: {
    width: "100%",
    height: 20,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  hoantien: {
    fontSize: 12,
    fontWeight: 700,
    color: "red",
    marginLeft: 50,
  },
  btnChonMau: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#000000",
    width: "90%",
    marginTop: 20,
    borderRadius: 10,
    height: 34,
    flexDirection: "row",
    alignItems: "center",
  },
  text1: {
    fontSize: 15,
    fontWeight: 400,
    marginLeft: 100,
    width: 250,
    marginLeft: 90,
  },
  text2: {
    fontSize: 20,
    fontWeight: 400,
    marginLeft: -50,
  },
  btnChonMua: {
    backgroundColor: "red",
    color: "white",
    width: "90%",
    height: 44,
    marginTop: 45,
    borderRadius: 10,
    fontSize: 20,
    fontWeight: 700,
  },
});