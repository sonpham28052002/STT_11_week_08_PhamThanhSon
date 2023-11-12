import React from "react";
import { View, Image, Text, TouchableOpacity, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function screen4({ navigation, route }) {
  var [arr, setArr] = React.useState(route.params);
  var [account, setAccout] = React.useState(undefined);
  React.useEffect(() => {
    fetch("https://655072297d203ab6626dccd6.mockapi.io/USER/1")
      .then((res) => res.json())
      .then((data) => setAccout(data));
  }, []);
  var total = 0;
  arr.map((item) => {
    total += item.price * item.quantity;
  });
  console.log(total);
  return (
    <View style={{ flex: 1, paddingHorizontal: 20 }}>
      <View
        style={{
          backgroundColor: "#00BDD6",
          height: 140,
          width: "100%",
          marginTop: 10,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
          justifyContent: "space-around",
          borderRadius: 20,
        }}
      >
        <View>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            CAFE DELIVERY
          </Text>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            Order #18
          </Text>
        </View>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
          ${total}
        </Text>
      </View>
      <FlatList
        data={arr}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return (
            <View
              key={index}
              style={{
                height: 80,
                width: "100%",
                marginVertical: 10,
                alignItems: "center",
                padding: 10,
                borderWidth: 1,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Image
                style={{ height: "90%", width: 80, marginRight: 20 }}
                source={require(`../image/${item.image}`)}
              />
              <View style={{ justifyContent: "space-around" }}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  {item.name}
                </Text>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  $ {item.price}
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  style={{
                    height: 30,
                    width: 30,
                    backgroundColor: "#F1B000",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 10,
                  }}
                >
                  <AntDesign name="minus" size={24} color="white" />
                </TouchableOpacity>
                <Text
                  style={{
                    marginHorizontal: 10,
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  {item.quantity}
                </Text>
                <TouchableOpacity
                  style={{
                    height: 30,
                    width: 30,
                    backgroundColor: "#F1B000",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 10,
                  }}
                >
                  <AntDesign name="plus" size={24} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
      <View
        style={{ marginBottom: 20, width: "100%", justifyContent: "center" }}
      >
        <TouchableOpacity
          style={{
            height: 50,
            width: "100%",
            backgroundColor: "#EFB034",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            account.order.push({
              id: account.order.length + 1,
              total: total,
              date: new Date().toLocaleDateString("vi-VN"),
            });
            console.log(account);
            fetch("https://655072297d203ab6626dccd6.mockapi.io/USER/1", {
              method: "Put",
              cache: "no-cache",
              body: JSON.stringify(account),
              headers: new Headers({
                "Content-Type": "application/json",
              }),
            })
              .then((x) => x.json())
              .then((data) => {
                navigation.navigate("Shops Near Me");
              });
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
            PAY NOW
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
