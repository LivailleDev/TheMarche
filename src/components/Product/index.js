import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Product({ data, addToCart }) {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.icon}>{data.icon}</Text>
        <View>
          <Text style={styles.title}>{data.name}</Text>
          <Text style={styles.price}>€ {data.price.toFixed(2)}</Text>
        </View>
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
    borderRadius: 10,
    marginBottom: 12,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 30,
    marginRight: 12,
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
    width: 36,
    height: 36,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
