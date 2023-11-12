import React from "react";
import { View, Image, Text, TouchableOpacity,FlatList } from "react-native";

export default function screen2({ navigation }) {
    var [shops,setShops] = React.useState(undefined)
  React.useEffect(() => {
    fetch("https://655072297d203ab6626dccd6.mockapi.io/SHOP")
      .then((res) => res.json())
      .then((data) => setShops(data));
  }, []);
  return <View style={{ flex: 1, backgroundColor: "#F3F4F6" , paddingHorizontal:20}}>
    <FlatList
        data={shops}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
            return(
                <TouchableOpacity style={{height:150, backgroundColor:"white",width:"100%", marginVertical:10, borderRadius:10, paddingHorizontal:10}} 
                    onPress={()=>{
                        navigation.navigate("Drinks",item)
                    }}
                >
                    <Image style={{width:"100%",height:"50%",borderRadius:10}} source={require(`../image/${item.image}`)}/>
                    <View style={{flexDirection:"row", justifyContent:"space-around"}}>
                        <Text >Tempory Unavailable</Text>
                        <Text style={{fontWeight:'700'}}><Text>{item.to_delivery}</Text>-<Text>{item.from_delivery}</Text></Text>
                    </View>
                    <Text style={{fontWeight:'bold', fontSize:15}}>{item.name}</Text>
                    <Text>1121 NE 45 St</Text>
                </TouchableOpacity>
            );
        }}
    />
  </View>;
}
