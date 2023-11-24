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
export default function Screen4({ navigation }) {
  var route = useRoute();
  var [shop, setShop] = useState(route.params.shop);
  var [orders, setOrders] = useState(route.params);
  const priceTotal = () => {
    let total = 0;
    orders.orders.forEach((item) => {
      total += item.price;
    });
    return total;
  };
  const payOrders = () => {
    const newData = {
      name: shop.name,
      address: shop.address,
      status: shop.status,
      delivery: shop.delivery,
      img: shop.img,
      drinks: shop.drinks,
      orders: [],
      id: shop.id,
    };
    fetch(`https://65420869f0b8287df1ff5d0a.mockapi.io/Bai3/${shop.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((response) => response.json())
      .then((updateData) => {
        setOrders(updateData);
      });
    alert("Pay Success!");
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 10,
          width: "90%",
          height: 100,
          borderRadius: 8,
          backgroundColor: "#00BDD6",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <View style={{ marginTop: 30, marginLeft: 20 }}>
          <Text
            style={{
              fontFamily: "inter",
              fontSize: 16,
              fontWeight: 400,
              color: "white",
            }}
          >
            CAFE DELIVERY
          </Text>
          <Text
            style={{
              fontFamily: "inter",
              fontSize: 16,
              fontWeight: 400,
              color: "white",
              marginTop: 10,
            }}
          >
            Order #18
          </Text>
        </View>
        <View style={{ marginLeft: 140, justifyContent: "center" }}>
          <Text
            style={{
              fontFamily: "inter",
              fontSize: 20,
              fontWeight: 400,
              color: "white",
              marginTop: 10,
            }}
          >
            $5
          </Text>
        </View>
      </View>
      <View
        style={{
          width: "90%",
          height: 100,
          borderRadius: 8,
          backgroundColor: "#8353E2",
          flexDirection: "row",
          justifyContent: "flex-start",
          marginTop: 10,
        }}
      >
        <View style={{ marginTop: 30, marginLeft: 20 }}>
          <Text
            style={{
              fontFamily: "inter",
              fontSize: 16,
              fontWeight: 400,
              color: "white",
            }}
          >
            CAFE
          </Text>
          <Text
            style={{
              fontFamily: "inter",
              fontSize: 16,
              fontWeight: 400,
              color: "white",
              marginTop: 10,
            }}
          >
            Order #18
          </Text>
        </View>
        <View style={{ marginLeft: 140, justifyContent: "center" }}>
          <Text
            style={{
              marginLeft: 50,
              fontFamily: "inter",
              fontSize: 20,
              fontWeight: 400,
              color: "white",
              marginTop: 10,
            }}
          >
            ${priceTotal()}
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 15,
          width: 360,
          height: 250,
          backgroundColor: "#F3F4F6",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignSelf: "center",
        }}
      >
        <FlatList
          data={orders.orders}
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
        onPress={payOrders}
        style={{
          marginTop: 30,
          width: "90%",
          height: 44,
          borderRadius: 8,
          backgroundColor: "#EFB034",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontFamily: "inter",
            fontSize: 16,
            fontWeight: 400,
            color: "white",
          }}
        >
          PAY NOW
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    flexDirection: "column",
  },
});
