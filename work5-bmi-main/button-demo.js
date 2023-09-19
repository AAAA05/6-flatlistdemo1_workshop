import react from 'react'
import { View, Text, StyleSheet, Alert, Button } from 'react-native'

export default function ButtonDemo(){

    const onPressButton2 = () => {
        Alert.alert('คุณกดปุ่มที่ 2')
    }

    const onPressButton3 = () => {
        Alert.alert(
            'การลบข้อมูล',
            'Nissannnnnnnnnnnnnnnnnnnnnnnnnnnnn',
            [
                {
                    text:'Yes',
                    onPress: () => {}
                },
                {
                    text:'No',
                    onPress: () => {}
                }
            ]
        )
    }


return(
    <View style={styles.container}>

        <Button title="ปุ่มที่ 1" color="black" onPress={ () => Alert.alert('คุณกดปุ่มที่ 1')}/>
        <Button title="ปุ่มที่ 2" color="gray" onPress={onPressButton2}/>
        <Button title="ปุ่มที่ 3" color="silver" onPress={onPressButton3}/>

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
        height:60,
        backgroundColor: 'red',
        marginBottom: 15,
        paddingLeft : 10,
        justifyContent: "center",
    }
}
)