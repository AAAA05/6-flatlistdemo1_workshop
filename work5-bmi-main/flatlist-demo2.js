import react from "react";
import { View, StyleSheet, Text, TouchableOpacity, FlatList, } from 'react-native'

export default function FlatListDemo2(){
  const listdata = [
    {name:'iPloy', price:250000},
    {name:'iPee', price:550000},
    {name:'iPong', price:600000},
    {name:'iPhum', price:25},
  ]

  const renderFlatListItem = (listdata) => {
    return(
      <View  key={listdata.item.name} style={styles.flatlistItem}>
        <Text style={styles.itemName}>{listdata.item.name}</Text>
        <Text style={styles.itemPrice}>{listdata.item.price} THB</Text>
      </View>
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
        numColumns={2}
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