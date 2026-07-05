import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Product({ data, addToCart }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.price}>€ {data.price.toFixed(2)}</Text>
      </View>
      <TouchableOpacity
        style={styles.buttonAdd}
        onPress={addToCart}
        accessibilityLabel={`Add ${data.name}`}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius: 8,
    marginBottom: 12,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  price: {
    color: '#555',
    marginTop: 2,
  },
  buttonAdd: {
    backgroundColor: '#70B529',
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
});
