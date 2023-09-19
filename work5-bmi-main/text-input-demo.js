import react from 'react'
import { View, Text, StyleSheet, Alert, Button, TextInput, } from 'react-native'

export default function TextInputDemo(){

    const t ='Click Count : '

    let [inputName, setInputName] = react.useState('')
    let [inputEmail, setInputEmail] = react.useState('')
    let [inputPassword, setInputPassword] = react.useState('')

    const onPressButton1 = () => {

    }

return(
    <View style={styles.container}>
        <View style={styles.item}>
            <Text>Name</Text>
            <TextInput style={styles.textinput} defaultValue={inputName} onChange={event => setInputName(event.nativeEvent.text)}/>
        </View>
        <View style={styles.item}>
            <Text>Email</Text>
            <TextInput style={styles.textinput} defaultValue={inputEmail} onChangeText={text => setInputEmail(text)} 
            keyboardType='email-address' //number-pad, secureTextEntry = ****(password)//
            />
        </View>
        <View style={styles.item}>
            <Text>Password</Text>
            <TextInput style={styles.textinput} defaultValue={inputPassword} onChangeText={text => setInputPassword(text)} 
             secureTextEntry={true}
            />
        </View>
        
      <View style={styles.item}>
        <Button title="ตรวจสอบข้อมูล" color="green" onPress={onPressButton1}/>
      </View>

    </View>
)
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column', 
        marginTop: 50,
        alignItems: 'center',
    },
    item:{
      marginBottom:15,
    },
    textinput:{
        height:32,
        width:300,
        borderWidth:1,
        borderColor:'silver',
        color: 'dodgerblue',
        backgroundColor: 'honeydew',
        marginTop:5,
        paddingTop:3,
        paddingBottom:3,
    }
}
)