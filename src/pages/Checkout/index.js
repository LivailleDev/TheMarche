import { useContext, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { CartContext } from '../../contexts/CartContext';

export default function Checkout({ navigation }) {
  const { cart, checkout, clearCart } = useContext(CartContext);
  const [placed, setPlaced] = useState(false);

  function confirmOrder() {
    clearCart();
    setPlaced(true);
  }

  if (placed) {
    return (
      <View style={styles.center}>
        <Text style={styles.check}>✅</Text>
        <Text style={styles.success}>Order placed!</Text>
        <Text style={styles.sub}>Thanks for shopping with The Marché.</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Shop')}
        >
          <Text style={styles.buttonText}>Back to shop</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order summary</Text>

      <FlatList
        data={cart}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.rowName}>
              {item.icon} {item.name} × {item.amount}
            </Text>
            <Text style={styles.rowPrice}>€ {item.checkout.toFixed(2)}</Text>
          </View>
        )}
      />

      <View style={styles.totalRow}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalValue}>€ {checkout.toFixed(2)}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={confirmOrder}>
        <Text style={styles.buttonText}>Confirm order</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
  },
  rowName: {
    fontSize: 15,
  },
  rowPrice: {
    fontSize: 15,
    fontWeight: '600',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 20,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
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
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#FAFAFA',
  },
  check: {
    fontSize: 56,
    marginBottom: 8,
  },
  success: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3B7A22',
  },
  sub: {
    fontSize: 15,
    color: '#666',
    marginTop: 6,
    marginBottom: 28,
    textAlign: 'center',
  },
});
