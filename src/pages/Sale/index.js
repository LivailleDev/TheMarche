import { useState, useContext } from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'

import { Feather } from '@expo/vector-icons'
import Product from '../../components/Product'
import { useNavigation } from '@react-navigation/native'
import { CartContext } from '../../contexts/CartContext'

export default function Sale(){
    const { cart, addItemCart } = useContext(CartContext)

    const navigation = useNavigation();
    const [products, setProducts] = useState([
        {
            id: '1',
            name: "Tomatoes",
            price: 1.90
          },
          {
            id: '2',
            name: "Water",
            price: 0.50
          },
          {
            id: '4',
            name: "Apples",
            price: 1.10
          },
          {
            id: '5',
            name: "Oranges",
            price: 0.40
          },
          {
            id: '6',
            name: "Toilet Paper",
            price: 2.050
          },
    ])

    function handleAddCart(item){
        addItemCart(item)
    }

    return(
        <SafeAreaView  style={styles.container}>
        <View style={styles.cartContent}>
            <Text style={styles.title}> Product List </Text>

            <TouchableOpacity style={styles.cartButton} 
            onPress={() => navigation.navigate("Cart")}
            >
              {cart.length >= 1 && (
                <View style={styles.dot}>
                <Text style={styles.dotText}>
                    {cart?.length}
                </Text>
                </View>
              )}
                <Feather name="shopping-cart" size={30} color="#83C226"/>
            </TouchableOpacity>
        </View>

        <FlatList
         style={styles.list}
         data={products}
         keyExtractor={(item) => String(item.id)}
         renderItem={({item}) => <Product data={item} addToCart ={() => handleAddCart(item) }/>}
        />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FAFAFA',
        paddingEnd: 14,
        paddingStar:14,
    },
    cartContent:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 30,
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold'
    },
    dot:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#197934",
        width: 20,
        height: 20,
        borderRadius: 12,
        position: 'absolute',
        zIndex: 99,
        bottom: -2,
        left: -4
    },
    dotText:{
        fontSize: 11,
        
    },
})
