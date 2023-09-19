import react from 'react'
import { View, Text, StyleSheet, Alert, Button } from 'react-native'

export default function ButtonStateDemo(){

    const t ='Click Count : '
    let [count, setCount] = react.useState(0) //let คือการกำหนดลักษณะตัวแปร count,setCount คือตัวแปร | เมื่อกด setCount = 1 แล้วนำไปเก็บที่ count | react.useState คือ action ของฟังชั่นนี้//
    let [text, setText] = react.useState(t+count) 

    const onPressButton1 = () => {
        const display = count+1
        setCount(display)
        setText(t+display)
    }

return(
    <View style={styles.container}>

      <View style={styles.item}>
        <Button title="Click Here" color="mediumslateblue" onPress={onPressButton1}/>
        <View>
            <Text style={{fontsize: 18}}>{text}</Text>
        </View>
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
      width: 150,
      marginBottom:15,
    }
}
)