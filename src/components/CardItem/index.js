import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Presentational only — the quantity comes from the cart context (single source
// of truth), so it always stays in sync.
export default function CardItem({ data, addAmount, removeAmount }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.price}>€ {data.price.toFixed(2)}</Text>
      </View>

      <View style={styles.amountContainer}>
        <TouchableOpacity style={styles.button} onPress={removeAmount}>
          <Text style={styles.buttonText}>−</Text>
        </TouchableOpacity>

        <Text style={styles.amount}>{data.amount}</Text>

        <TouchableOpacity style={styles.button} onPress={addAmount}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius: 8,
    marginBottom: 12,
    padding: 12,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  price: {
    fontSize: 14,
    color: '#555',
    marginTop: 2,
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#77B928',
    width: 34,
    height: 34,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  amount: {
    marginHorizontal: 16,
    fontSize: 16,
    minWidth: 16,
    textAlign: 'center',
  },
});
