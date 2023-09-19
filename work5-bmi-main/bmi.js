import React from 'react'
import { View, Text, StyleSheet, Alert, Button, TextInput, Image } from "react-native";

export default function BMI(){

    const t = 'Click Count'
        
       let [inputNum1, setInputNum1]= React.useState(0)
       let [inputNum2, setInputNum2] = React.useState(0)
       let [sresult, setsResult] = React.useState(0)
       let [display, setdisplay] = React.useState(0)
       let [picture, setpicture] = React.useState('')
    
       const onPressButton1 = () =>{
            let imageName=''
            let num1 = parseInt(inputNum1) //น้ำหนัก
            let num2 = parseInt(inputNum2) //ส่วนสูง
            let num3 = num2/100
            let num4 = num3 * num3
            let consult = num1 / num4
        

            if (consult >= 35){
                msg ='Extremely obese'
                imageName = require('./extremlyobese.jpg')
            }else if (consult >= 30){
                msg = 'Obese'
                imageName = require('./obese.jpg')
            }else if (consult >= 25){
                msg = 'Overweight'
                imageName = require('./overweight.jpg')
            }else if (consult >= 18.5){
                msg = 'Normal'
                imageName = require('./normal.jpg')
            }else if (consult <=18.49){
                msg = 'Underweight'
                imageName = require('./underweight.jpg')
            }else {
                Alert.alert('Unidentified')
            }
                
             setsResult(consult.toFixed(2))
             setdisplay(msg)
             setpicture(imageName)
       }
      
    
return(
    <View style={styles.container}>
        <View>
            <Text>BMI Application</Text>
        </View>
        <View style={styles.item}>
            <Text>น้ำหนัก</Text>
            <TextInput style={styles.textnput} defaultValue={inputNum1}
             onChange={event => setInputNum1(event.nativeEvent.text)}
             keyboardType='numeric'
            />
        </View>
        <View style={styles.item}>
            <Text>ส่วนสูง</Text>
            <TextInput style={styles.textnput} defaultValue={inputNum2}
             onChange={event => setInputNum2(event.nativeEvent.text)}
             keyboardType='numeric'
            />
        </View>

        <View>
            <Text>ดัชนีมวลกาย : {sresult}</Text>
            <Text>ผลลัพธ์ : {display}</Text>
            <Image source={picture} style={styles.img}/>
        </View>

    <View style={styles.item}>
       <Button title="คำนวณ" color = "green" onPress={ onPressButton1 }/>
      
    </View>
    </View>

)
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'colum',
        marginTop:60,
        alignItems: 'center'
    },
    item:{
        marginTop:20,
        marginBottom:15,
    },
    TextInput:{
       height:32,
       width:320,
       borderWidth:1,
       borderColor: '#aaa',
       color:'black',
       backgroundColor:'#fff',
       marginTop:5,
       paddingTop:3,
       paddingButtom:3
    },
    img:{
      width: 200,
      height: 150,
      marginBottom:50,
      marginTop:20,
    }
})