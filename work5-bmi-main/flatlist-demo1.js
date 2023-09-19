import react from "react";
import { View, StyleSheet, Text, TouchableOpacity, FlatList, Image, Alert,} from 'react-native'

export default function FlatListDemo1(){
    let a =<Image source={require('./twitch.png')} style={styles.imgicon}/>
    let b =<Image source={require('./db.jpeg')} style={styles.imgicon}/>
    let c =<Image source={require('./twitch.png')} style={styles.imgicon}/>
    let d =<Image source={require('./twitch.png')} style={styles.imgicon}/>
  const listdata = [
    {img: a, name:'iPloy', price:250000},
    {img: b, name:'iPee', price:550000},
    {img: c, name:'iPong', price:600000}, //WORKSHOP
    {img: b, name:'iPhum', price:25},
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
       <Text style={styles.itemName}>{listdata.item.img}</Text>
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
        alignItems: 'center',
        paddingBottom: 50,
    },
    flatlistItem:{
        width: 150,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#cde',
        margin: 10,
        padding: 10,
        alignItems: 'center'
    },
    itemName:{
        fontsize: 18,
        fontStyle: 'italic',
    },
    itemPrice:{
        fontsize: 16,
        color: 'gray',
    },
        imgicon:{
        width: 40,
        height: 40,
        marginRight: 10,
    },
}
)