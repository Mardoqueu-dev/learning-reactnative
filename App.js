import { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);
  const [bgColor, setBgColor] = useState('#ffffff');

  const cores = ['#fca311', '#14213d', '#e63946', '#2a9d8f', '#8338ec'];

  const incrementar = () => {
    const novoValor = contador + 1;
    setContador(novoValor);

    // A cada 5 cliques, muda a cor de fundo
    if (novoValor % 5 === 0) {
      const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
      setBgColor(corAleatoria);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={styles.title}>🎯 Contador de Toques</Text>
      <Image
        source={require('./assets/gato.png')}
        style={styles.image}
      />
      <Text style={styles.contador}>Toques: {contador}</Text>

      <Pressable style={styles.botao} onPress={incrementar}>
        <Text style={styles.textoBotao}>Toque Aqui</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contador: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
    color: '#333',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },
  botao: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 12,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});


