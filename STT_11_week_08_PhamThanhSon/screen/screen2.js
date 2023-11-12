import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
export default function screen1({ navigation, route }) {
  var [product, setProduct] = React.useState(route.params);
  var [acc, setAcc] = React.useState(undefined);
  var [quantity, setPrice] = React.useState(1);
  React.useEffect(() => {
    fetch("https://6548588edd8ebcd4ab22c1a9.mockapi.io/Shop/1")
      .then((res) => res.json())
      .then((data) => setAcc(data));
  }, []);
  console.log(product);
  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      <View style={{ width: "100%", alignItems: "center", marginBottom: 20 }}>
        <Image
          style={{ height: 300, width: 300 }}
          source={require(`../image/${product.image}`)}
        />
      </View>
      <Text style={{ fontWeight: "bold", fontSize: 30 }}>{product.name}</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>{product.des}</Text>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          $ {product.price}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 30,
          alignItems: "center",
        }}
      >
        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign name="clockcircleo" size={24} color="black" />
            <Text style={{ color: "gray", marginLeft: 10, fontWeight: "700" }}>
              Delivery in
            </Text>
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 20, marginLeft: 20 }}>
            {product.delivery} min
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
            onPress={() =>
              quantity == 1 ? setPrice(1) : setPrice(quantity - 1)
            }
          >
            <AntDesign name="minus" size={24} color="white" />
          </TouchableOpacity>
          <Text
            style={{ marginHorizontal: 10, fontSize: 20, fontWeight: "bold" }}
          >
            {quantity}
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
            onPress={() => setPrice(quantity + 1)}
          >
            <AntDesign name="plus" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          Restaurants Info
        </Text>
        <Text
          style={{
            marginTop: 10,
            fontSize: 15,
            fontWeight: "bold",
            color: "gray",
          }}
        >
          {product.restaurantsInfo}
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            height: 60,
            width: "90%",
            backgroundColor: "#F1B000",
            marginTop: 30,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            console.log("click");
            console.log(
              acc.cart.filter((item) => item.product_id === product.id)
            );

            if (
              acc.cart.filter((item) => item.product_id == product.id).length !=
              0
            ) {
              console.log("1");
              acc.cart = acc.cart.map((item) =>
                item.product_id == product.id
                  ? {
                      product_id: product.id,
                      quantity: quantity,
                    }
                  : item
              );
            } else {
              console.log("2");
              acc.cart.push({
                product_id: product.id,
                quantity: quantity,
              });
            }
            console.log("jb");
            console.log(acc);
            fetch("https://6548588edd8ebcd4ab22c1a9.mockapi.io/Shop/1", {
              method: "Put",
              cache: "no-cache",
              body: JSON.stringify(acc),
              headers: new Headers({
                "Content-Type": "application/json",
              }),
            })
              .then((x) => x.json())
              .then((data) => {
                navigation.navigate("screen1")
              });
          }}
        >
          <Text style={{ fontSize: 25, color: "white", fontWeight: "bold" }}>
            Add to cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
