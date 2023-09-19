import react from "react";
import { View, StyleSheet, Image } from 'react-native'

export default function ImageDemo(){
    const imgSrc = require('./b1.png')

    return(
        <View style={styles.container}>
            <Image source={imgSrc} style={styles.img}/>
            <Image source={require('./assets/b2.png')} style={styles.img}/>
            <Image source={require('./assets/image/b3.png')} style={styles.img}/>
            <Image source={{uri:'https://th.bing.com/th/id/OIP.U3La9wghYYHCLtUdcMh8IQHaH1?pid=ImgDet&rs=1'}} resizeMode={'stretch'} style={styles.img}/>
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
    }
}
)