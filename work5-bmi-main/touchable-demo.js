import react from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, TouchableHighlight, Alert, } from 'react-native'

export default function TouchAbleDemo(){

    return(
        <View style={styles.container}>

          <TouchableOpacity activeOpacity={0.01} onPress={() => {Alert.alert('You m*therf*ck!')}}
          style={styles.items}>
          <Text style={styles.fonts}>Opacity</Text>
          </TouchableOpacity>

          <TouchableHighlight underlayColor={'gold'} onPress={() => {Alert.alert('F*ck me!')}} 
          style={styles.items}>
          <Text style={styles.fonts}>Highlight</Text>
          </TouchableHighlight>

          <TouchableHighlight underlayColor={'yellow'} onPress={() => {Alert.alert('F*ck me more!')}} 
          style={styles.items}>
          <View style={styles.justimgtext}>
          <Image source={require('./twitch.png')} style={styles.imgicon}/>
          <Text style={styles.fonts}>Highlight</Text>
          </View>
          </TouchableHighlight>

        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row', 
        flexWrap: 'wrap',
        marginTop: 50,
        justifyContent: 'space-evenly',
    },
    img:{
        width: 200,
        height: 150,
        borderWidth: 1,
        borderColor: 'red',
        marginBottom: 5,
    },
    items:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
        width: 250,
        height: 45,
        marginBottom: 15,
        borderRadius: 15,
    },
    fonts:{
        color: 'white',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 20,
    },
    imgicon:{
        width: 40,
        height: 40,
        marginRight: 10,
    },
    justimgtext:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    }
}
)