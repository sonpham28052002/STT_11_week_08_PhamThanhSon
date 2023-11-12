import React from "react";
import { View, Image, Text, TouchableOpacity, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function screen3({ navigation, route }) {
  var [menu, setMenu] = React.useState(route.params?.menu);
  return (
    <View style={{ flex: 1, paddingHorizontal: 20, backgroundColor: "white" }}>
      <FlatList
        style={{ paddingVertical: 0 }}
        data={menu}
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
                  onPress={() => {
                    console.log(menu[index].quantity)
                    menu[index].quantity == 0
                      ? (menu[index].quantity = 0)
                      : (menu[index].quantity = menu[index].quantity - 1);
                      let arr = menu
                    setMenu(arr);
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
                  {menu[index].quantity}
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
                  onPress={() => {
                    menu[index].quantity = menu[index].quantity + 1;
                    let arr = menu
                    setMenu(arr);
                  }}
                >
                  <AntDesign name="plus" size={24} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "#EFB034",
          height: 50,
          width: "100%",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 50,
        }}
        onPress={()=>{
            var arr = menu.filter((item) => item.quantity > 0)
            console.log(arr)
            navigation.navigate("Your orders",arr)
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: "20" }}>GO TO CART</Text>
      </TouchableOpacity>
    </View>
  );
}
