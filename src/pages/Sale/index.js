import { useContext, useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import Product from '../../components/Product';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../../contexts/CartContext';
import { CATALOG, CATEGORIES } from '../../data/catalog';

export default function Sale() {
  const { cart, addItemCart } = useContext(CartContext);
  const navigation = useNavigation();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const products = useMemo(() => {
    const q = query.trim().toLowerCase();
    return CATALOG.filter(
      (item) =>
        (category === 'All' || item.category === category) && item.name.toLowerCase().includes(q)
    );
  }, [query, category]);

  const itemCount = cart.reduce((total, item) => total + item.amount, 0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Products</Text>

        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => navigation.navigate('Cart')}
          accessibilityLabel="Open cart"
        >
          {itemCount >= 1 && (
            <View style={styles.dot}>
              <Text style={styles.dotText}>{itemCount}</Text>
            </View>
          )}
          <Feather name="shopping-cart" size={28} color="#3B7A22" />
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.search}
        placeholder="Search products…"
        value={query}
        onChangeText={setQuery}
        autoCapitalize="none"
      />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.chipsRow}
        contentContainerStyle={styles.chipsContent}
      >
        {CATEGORIES.map((c) => (
          <TouchableOpacity
            key={c}
            onPress={() => setCategory(c)}
            style={[styles.chip, category === c && styles.chipActive]}
          >
            <Text style={[styles.chipText, category === c && styles.chipTextActive]}>{c}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => <Product data={item} addToCart={() => addItemCart(item)} />}
        ListEmptyComponent={<Text style={styles.empty}>No products found.</Text>}
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
    marginBottom: 14,
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
  search: {
    height: 44,
    borderWidth: 1,
    borderColor: '#DADADA',
    borderRadius: 10,
    paddingHorizontal: 14,
    backgroundColor: '#fff',
    marginBottom: 12,
  },
  chipsRow: {
    flexGrow: 0,
    marginBottom: 12,
  },
  chipsContent: {
    gap: 8,
    paddingRight: 8,
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
    backgroundColor: '#ECECEC',
  },
  chipActive: {
    backgroundColor: '#70B529',
  },
  chipText: {
    color: '#444',
    fontWeight: '600',
    fontSize: 13,
  },
  chipTextActive: {
    color: '#fff',
  },
  list: {
    paddingBottom: 20,
  },
  empty: {
    textAlign: 'center',
    color: '#888',
    marginTop: 40,
  },
});
