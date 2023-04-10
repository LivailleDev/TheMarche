import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.text}>Você está logado com sucesso.</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Item1')}>
        <Text style={styles.buttonText}>Cadastro de Produtos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Item2')}>
        <Text style={styles.buttonText}>Cadastro de Clientes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Item3')}>
        <Text style={styles.buttonText} onPress={() => navigation.navigate('Sale')}>Lançar Vendas</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
