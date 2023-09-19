import react from "react";
import { View,Text,StyleSheet } from "react-native";

export default function Question(){
  return(
    <View>
    <Text style = {aa.text}>Question</Text>
    </View>
  )
}

const aa = StyleSheet.create({
  text:{
    color: 'black',
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 50,


  }

}
)