import react from "react";
import { View,Text,StyleSheet } from "react-native";

export default function LayOut(){
    const items = ['Image']
    return(
        <View style = {styles.container}>
            {items.map((item, i) =>{
                return(
                    <View key={i} style = {styles.item}>
                        <Text style = {styles.text}>{item}</Text>
                    </View>
                )
            }
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row', 
        flexWrap: 'wrap',
        justifyContent: "center",
        marginTop: 20,
        padding: 10,
    },
    item:{
        height:250,
        width:250,
        backgroundColor: 'tomato',
        marginBottom: 15,
        //paddingLeft : 10,
        justifyContent: "center",
        alignItems: 'center',
        margin: 10,
    },
    text:{
        color: 'white',
        fontSize: 20,
    }
})