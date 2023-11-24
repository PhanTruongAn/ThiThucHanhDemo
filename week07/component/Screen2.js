import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
export default function Screen2({ navigation }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.user);
  console.log(data);
  var route = useRoute();
  var handleInsertJob = () => {
    if (data !== null) {
      navigation.navigate("Screen3", { insertJob: data });
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.viewAvatar}>
        <Image
          source={{ uri: data.avatar }}
          style={{ height: 50, width: 50 }}
        ></Image>

        <View style={styles.viewTextAvatar}>
          <Text
            style={{
              width: 101,
              height: 30,
              marginLeft: 40,
              fontFamily: "Epilogue",
              fontSize: 14,
              fontWeight: 700,
              marginTop: 10,
            }}
          >
            Hi {data.name}
          </Text>
          <Text style={{ fontWeight: 500, top: -12, left: 10 }}>
            Have a great day a head
          </Text>
        </View>
      </View>
      <View style={styles.viewSearch}>
        <Image
          source={require("./image/IconSearch.PNG")}
          style={{ width: 20, height: 20, left: 10 }}
        ></Image>
        <TextInput
          style={{
            marginLeft: 30,
            width: 250,
            height: 43,
            fontSize: 18,
            fontWeight: 400,
            color: "gray",
            outline: "none",
          }}
          placeholder="Search"
        ></TextInput>
      </View>

      <View
        style={{
          width: "100%",
          height: 400,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <FlatList
          data={data.jobs}
          renderItem={({ item }) => (
            <View style={styles.viewJob}>
              <TouchableOpacity>
                <Image
                  source={require("./image/IconCheck.PNG")}
                  style={{ width: 30, height: 30, left: 20 }}
                ></Image>
              </TouchableOpacity>
              <TextInput
                style={{
                  outline: "none",
                  alignSelf: "center",
                  justifyContent: "center",
                  fontSize: 17,
                  fontWeight: 500,
                }}
                value={item}
              ></TextInput>
              {/* <Text style={{}}>{item}</Text> */}
              <TouchableOpacity>
                <Image
                  source={require("./image/IconEdit.PNG")}
                  style={{ width: 25, height: 25, left: -20 }}
                ></Image>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <Pressable onPress={handleInsertJob} style={styles.btn}>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 30,
            color: "white",
            justifyContent: "center",
            fontWeight: 600,
            top: -3,
          }}
        >
          +
        </Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "column",
  },
  btn: {
    marginTop: -50,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00BDD6",
    borderRadius: 30,
    color: "white",
    fontSize: 30,
    fontWeight: 600,
    alignItems: "center",
  },
  viewAvatar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    width: 100,
    marginLeft: 50,
  },
  viewSearch: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 334,
    height: 44,
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 2,
  },
  viewJob: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 330,
    height: 48,
    backgroundColor: "#d2d5d9",
    borderRadius: 25,
    alignSelf: "center",
    marginVertical: 10,
    marginHorizontal: 10,
  },
});
