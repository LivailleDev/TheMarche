import { useContext } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';

import { CartContext } from '../../contexts/CartContext';
import CardItem from '../../components/CardItem';

export default function Cart() {
  const { cart, addItemCart, removeItemCart, checkout } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        ListEmptyComponent={() => <Text style={styles.empty}>Your cart is empty.</Text>}
        renderItem={({ item }) => (
          <CardItem
            data={item}
            addAmount={() => addItemCart(item)}
            removeAmount={() => removeItemCart(item)}
          />
        )}
        ListFooterComponent={() =>
          cart.length > 0 ? (
            <Text style={styles.checkout}>Total: € {checkout.toFixed(2)}</Text>
          ) : null
        }
      />
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
  empty: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 40,
  },
  checkout: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 24,
    textAlign: 'right',
  },
});
