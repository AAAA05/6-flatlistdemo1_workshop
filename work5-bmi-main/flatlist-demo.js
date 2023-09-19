import react from "react";
import { View, StyleSheet, Text, TouchableOpacity, FlatList, Alert, } from 'react-native'

export default function FlatListDemo2(){
  const listdata = [
    {name:'iPloy', price:250000},
    {name:'iPee', price:550000},
    {name:'iPong', price:600000},
    {name:'iPhum', price:25},
  ]

    const onPressItem = (item) => {
      let name = item.name
      let price = item.price
      Alert.alert(`${name} ราคา ${item.price} บาท`)
    }

  const renderFlatListItem = (listdata) => {
    return(
      <TouchableOpacity onPress={() => onPressItem(listdata.item)}>

      <View  key={listdata.item.name} style={styles.flatlistItem}>
        <Text style={styles.itemName}>{listdata.item.name}</Text>
        <Text style={styles.itemPrice}>{listdata.item.price} THB</Text>
      </View>

      </TouchableOpacity>
    )
  }
    return(
        <View style={styles.container}>
        <Text style={{alignSelf:'center', fontsize:20, fontWeight: 'bold'}}>รายการสินค้า</Text>
        <FlatList data={listdata} 
        renderItem={renderFlatListItem}
        keyExtractor={(item, index) => item+index}
        style={styles.flatlist}
        contentContainerStyle={styles.flatlistContent}
        />
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 50,
    },
    flatlist:{
        marginTop: 10,
    },
    flatlistContent:{
        margin: 10,
        paddingBottom: 50,
    },
    flatlistItem:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#cde',
        marginBottom: 8,
        padding: 10,
    },
    itemName:{
        fontsize: 18,
        fontStyle: 'italic',
    },
    itemPrice:{
        fontsize: 16,
        color: 'gray',
    },
}
)