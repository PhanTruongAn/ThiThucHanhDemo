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
export default function Screen3({ navigation }) {
  var route = useRoute();
  var [data, setData] = useState(route.params.item);
  var [item, setItem] = useState(route.params.item.drinks);
  console.log(item);
  const orderDrinks = (item) => {
    const order = {
      name: item.name,
      price: item.price,
      img: item.img,
    };
    data.orders.push(order);
    console.log(order);
    fetch(`https://65420869f0b8287df1ff5d0a.mockapi.io/Bai3/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((updateOrders) => {
        setData(updateOrders);
      });
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F3F4F6",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <View
        style={{
          width: 360,
          height: 500,
          backgroundColor: "#F3F4F6",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignSelf: "center",
        }}
      >
        <FlatList
          data={item}
          renderItem={({ item }) => (
            <View
              style={{
                marginTop: 15,
                width: 350,
                height: 65,
                backgroundColor: "white",
                alignSelf: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                borderWidth: 1,
                borderColor: "gray",
              }}
            >
              <Image
                source={{ uri: item.img }}
                style={{
                  width: 65,
                  height: 65,
                  alignSelf: "center",
                }}
              ></Image>
              <View
                style={{
                  width: 150,
                  height: 65,
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: 400, left: 10 }}>
                  {item.name}
                </Text>
                <Text style={{ fontSize: 12, fontWeight: 400, left: 10 }}>
                  <Image
                    source={require("./img/Vector.png")}
                    style={{ width: 8, height: 9 }}
                  ></Image>
                  ${item.price}
                </Text>
              </View>
              <View
                style={{
                  width: 135,
                  height: 65,
                  borderRadius: 8,
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <TouchableOpacity
                  style={{ justifyContent: "center", alignSelf: "center" }}
                >
                  <Image
                    source={require("./img/Cong.png")}
                    style={{
                      alignSelf: "center",
                      width: 20,
                      height: 20,
                      alignSelf: "center",
                    }}
                  ></Image>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ justifyContent: "center", alignSelf: "center" }}
                  onPress={() => orderDrinks(item)}
                >
                  <Image
                    source={require("./img/Tru.png")}
                    style={{
                      alignSelf: "center",
                      width: 20,
                      height: 20,
                      alignSelf: "center",
                    }}
                  ></Image>
                </TouchableOpacity>
              </View>
            </View>
          )}
        ></FlatList>
      </View>

      <TouchableOpacity
        style={{
          width: 360,
          height: 42,
          backgroundColor: "#EFB034",
          alignSelf: "center",
          justifyContent: "center",
          borderRadius: 8,
        }}
        onPress={() =>
          navigation.navigate("Screen4", {
            orders: data.orders,
            shop: data,
          })
        }
      >
        <Text
          style={{
            fontSize: 17,
            fontWeight: 500,
            color: "white",
            alignSelf: "center",
          }}
        >
          GO TO ORDER
        </Text>
      </TouchableOpacity>
    </View>
  );
}
