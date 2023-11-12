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
export default function screen1({navigation}) {
  var [check, setCheck] = React.useState(0);
  var [arr,setArr] = React.useState(undefined)
  React.useEffect(() => {
    fetch("https://6548588edd8ebcd4ab22c1a9.mockapi.io/Donut")
      .then((rep) => rep.json())
      .then((data) => {
        setDS(data)
        setArr(data)
      });
  }, []);
  var [ds, setDS] = React.useState(arr);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text style={{ fontWeight: "600", fontSize: 15, color: "gray" }}>
        Welcome, Jala
      </Text>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>
        Choice you Best food
      </Text>
      <TextInput
        style={{
          height: 50,
          width: "80%",
          borderWidth: 3,
          fontWeight: "700",
          paddingLeft: 20,
          color: "gray",
          borderColor: "#C4C4C4",
          backgroundColor: "#C4C4C410",
          marginTop: 20,
        }}
        placeholder="Search food"
      />
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity
          style={{
            height: 35,
            width: 100,
            backgroundColor: check == 0 ? "#F1B000" : "white",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={()=>{
            setDS(arr)
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Donut</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 35,
            width: 100,
            backgroundColor: check == 1 ? "#F1B000" : "white",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={()=>{
            setDS(arr.filter((item) => item.name =="Prink Donut"));
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Pink Donut</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 35,
            width: 100,
            backgroundColor: check == 2 ? "#F1B000" : "white",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={()=>{
            setDS(arr.filter((item) => item.name =="Floating Donut"));
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Floating</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={{ width: "100%", marginTop: 20 }}
        data={ds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                height: 100,
                width: "100%",
                backgroundColor: "#F4DDDD",
                marginVertical: 5,
                borderRadius: 10,
                flexDirection: "row",
                padding: 5,
              }}
            >
              <Image
                style={{ height: 90, width: 90, marginRight: 20 }}
                source={require(`../image/${item.image}`)}
              />
              <View style={{ height: "100%", justifyContent: "space-around" }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  {item.name}
                </Text>
                <Text
                  style={{ color: "gray", width: 100, fontWeight: "bold" }}
                  numberOfLines={1}
                >
                  {item.des}
                </Text>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  ${item.price}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 15,
                  borderTopLeftRadius: 50,
                  backgroundColor: "#F1B000",
                  justifyContent:"center",
                  alignItems:'center',
                  position:"absolute",
                  bottom:0,
                  right:0
                }}
                onPress={()=>{
                    navigation.navigate("screen2",item)
                }}
              >
                <AntDesign name="plus" size={25} color="white" />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}
