import { useState, useContext } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Product from '../../components/Product';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../../contexts/CartContext';

const CATALOG = [
  { id: '1', name: 'Tomatoes', price: 1.9 },
  { id: '2', name: 'Water', price: 0.5 },
  { id: '3', name: 'Apples', price: 1.1 },
  { id: '4', name: 'Oranges', price: 0.4 },
  { id: '5', name: 'Toilet Paper', price: 2.05 },
  { id: '6', name: 'Milk', price: 0.99 },
  { id: '7', name: 'Bread', price: 1.25 },
  { id: '8', name: 'Coffee', price: 3.4 },
];

export default function Sale() {
  const { cart, addItemCart } = useContext(CartContext);
  const navigation = useNavigation();
  const [products] = useState(CATALOG);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Products</Text>

        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => navigation.navigate('Cart')}
          accessibilityLabel="Open cart"
        >
          {cart.length >= 1 && (
            <View style={styles.dot}>
              <Text style={styles.dotText}>{cart.length}</Text>
            </View>
          )}
          <Feather name="shopping-cart" size={28} color="#3B7A22" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Product data={item} addToCart={() => addItemCart(item)} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 14,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cartButton: {
    padding: 4,
  },
  dot: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#197934',
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    position: 'absolute',
    zIndex: 99,
    top: -4,
    right: -6,
    paddingHorizontal: 4,
  },
  dotText: {
    fontSize: 11,
    color: '#fff',
    fontWeight: 'bold',
  },
});
