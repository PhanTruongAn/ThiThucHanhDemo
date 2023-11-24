import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
export default function Screen2({ navigation }) {
  var [data, setData] = useState();
  var route = useRoute();
  useEffect(() => {
    fetch(`https://65420869f0b8287df1ff5d0a.mockapi.io/Bai3`)
      .then((response) => response.json())
      .then((json) => {
        data = json;
        setData(json);
      });
  }, []);
  useEffect(() => {
    if (route.params?.updateData) {
      setData(route.params.updateData);
    }
  }, [route.params?.updateData]);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F3F4F6",
      }}
    >
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Screen3", { item })}
            style={{
              width: 370,
              height: 230,
              borderRadius: 8,
              flexDirection: "column",
              borderRadius: 8,
              justifyContent: "space-evenly",
              backgroundColor: "white",
            }}
          >
            <Image
              source={{ uri: item.img }}
              style={{ top: -2, width: 370, height: 125, borderRadius: 8 }}
            ></Image>
            <View
              style={{
                width: 370,
                height: 40,
                backgroundColor: "white",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <View
                style={{
                  width: 340,
                  height: 40,
                  backgroundColor: "#F3F4F6",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <Image
                  source={require("./img/Check.png")}
                  style={{
                    width: 20,
                    height: 16,
                    alignSelf: "center",
                    justifyContent: "center",
                  }}
                ></Image>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 500,
                    alignSelf: "center",
                    color: "green",
                  }}
                >
                  Accepting Orders
                </Text>
                <Image
                  style={{ width: 20, height: 20, alignSelf: "center" }}
                  source={require("./img/Clock.png")}
                ></Image>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 500,
                    alignSelf: "center",
                    color: "red",
                  }}
                >
                  {item.delivery}
                </Text>
              </View>

              <Image
                source={require("./img/Location.png")}
                style={{
                  width: 17,
                  height: 22,
                  alignSelf: "center",
                }}
              ></Image>
            </View>
            <Text style={{ fontSize: 18, fontWeight: 700 }}>{item.name}</Text>
            <Text style={{ fontSize: 14, fontWeight: 400, color: "gray" }}>
              {item.address}
            </Text>
          </TouchableOpacity>
        )}
      ></FlatList>
    </View>
  );
}
