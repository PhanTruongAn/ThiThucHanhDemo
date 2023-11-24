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
import { useDispatch, useSelector } from "react-redux";
import { createData, getData } from "../redux/dataSlice";
export default function SignUp({ navigation }) {
  const dataReducer = useSelector((state) => state.data);
  const { data } = dataReducer;
  const dispatch = useDispatch();
  console.log(data);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  var listAvatar = [
    "https://res.cloudinary.com/dxyxfr1bj/image/upload/v1698827257/imageTuan7/User1.png",
    "https://res.cloudinary.com/dxyxfr1bj/image/upload/v1698827257/imageTuan7/User2.png",
    "https://res.cloudinary.com/dxyxfr1bj/image/upload/v1698827257/imageTuan7/User3.png",
    "https://res.cloudinary.com/dxyxfr1bj/image/upload/v1698827257/imageTuan7/User4.png",
    "https://res.cloudinary.com/dxyxfr1bj/image/upload/v1698827257/imageTuan7/User5.png",
    "https://res.cloudinary.com/dxyxfr1bj/image/upload/v1698827257/imageTuan7/User6.png",
    "https://res.cloudinary.com/dxyxfr1bj/image/upload/v1698827257/imageTuan7/User7.png",
    "https://res.cloudinary.com/dxyxfr1bj/image/upload/v1698827257/imageTuan7/User8.png",
    "https://res.cloudinary.com/dxyxfr1bj/image/upload/v1698827257/imageTuan7/User10.png",
    "https://res.cloudinary.com/dxyxfr1bj/image/upload/v1698827257/imageTuan7/User10.png",
  ];
  const getRandomAvatar = () => {
    const randomIndex = Math.floor(Math.random() * listAvatar.length);
    return listAvatar[randomIndex];
  };
  const handleSignUp = () => {
    if (name === "" || email === "") {
      alert("Vui lòng nhập đầy đủ thông tin !");
    } else {
      const newUser = {
        name: name,
        avatar: getRandomAvatar(),
        email: email,
        jobs: [],
        id: data.length + 1,
      };
      dispatch(createData(newUser));
      alert("Registeded success!");
      navigation.navigate("Screen1");
    }
  };
  return (
    <View
      style={{
        marginTop: 50,
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <View
        style={{
          width: 360,
          height: 50,
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Text style={styles.text}>Name: </Text>
        <TextInput
          onChangeText={(text) => setName(text)}
          style={{
            fontSize: 18,
            fontWeight: 600,
            outline: "none",
            backgroundColor: "#d2d5d9",
            alignSelf: "center",
          }}
        ></TextInput>
      </View>
      <View
        style={{
          width: 360,
          height: 50,
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Text style={styles.text}>Email: </Text>
        <TextInput
          onChangeText={(text) => setEmail(text)}
          style={{
            fontSize: 18,
            fontWeight: 600,
            outline: "none",
            backgroundColor: "#d2d5d9",
            alignSelf: "center",
          }}
        ></TextInput>
      </View>
      <TouchableOpacity
        onPress={handleSignUp}
        style={{
          backgroundColor: "#4de2d1",
          width: 100,
          height: 45,
          alignSelf: "center",
          borderRadius: 5,
          justifyContent: "center",
        }}
      >
        <Text style={styles.text}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 600,
    alignSelf: "center",
  },
});
