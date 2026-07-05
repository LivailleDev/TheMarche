import { useContext } from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';

import { CartContext } from '../../contexts/CartContext';
import CardItem from '../../components/CardItem';

export default function Cart({ navigation }) {
  const { cart, addItemCart, removeItemCart, checkout } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.list}
        ListEmptyComponent={() => <Text style={styles.empty}>Your cart is empty.</Text>}
        renderItem={({ item }) => (
          <CardItem
            data={item}
            addAmount={() => addItemCart(item)}
            removeAmount={() => removeItemCart(item)}
          />
        )}
      />

      {cart.length > 0 && (
        <View style={styles.footer}>
          <Text style={styles.total}>Total: € {checkout.toFixed(2)}</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Checkout')}>
            <Text style={styles.buttonText}>Checkout</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 14,
    paddingTop: 14,
  },
  list: {
    paddingBottom: 12,
  },
  empty: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 40,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#E3E3E3',
    paddingVertical: 14,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#70B529',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
