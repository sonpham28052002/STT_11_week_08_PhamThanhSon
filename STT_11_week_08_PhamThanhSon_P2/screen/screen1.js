import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

export default function screen1({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text style={{ fontWeight: "bold", fontSize: 25, marginTop: 60 }}>
        Welcome to Cafe world
      </Text>
      <Image
        style={{ height: 80, width: 250, borderRadius: 20, marginTop: 60 }}
        source={require("../image/1.jpg")}
      />
      <Image
        style={{ height: 80, width: 250, borderRadius: 20, marginTop: 60 }}
        source={require("../image/2.jpg")}
      />
      <Image
        style={{ height: 80, width: 250, borderRadius: 20, marginTop: 60 }}
        source={require("../image/3.jpg")}
      />
      <TouchableOpacity
        style={{
          height: 60,
          width: 350,
          backgroundColor: "#00BDD6",
          borderRadius: 10,
          marginTop: 60,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={()=>{
            navigation.navigate("Shops Near Me")
        }}
      >
        <Text style={{color:"white", fontWeight:'bold'}}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
}
