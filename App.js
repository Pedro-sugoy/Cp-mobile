import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [porcen, setPorcen] = useState('');
  const [result, setResult] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.nome}>Nome: Pedro Manzo Yoko /RM:556115</Text>
      <Text style={styles.texto}>Cálculo do Aumento de Preço (Porcentagem)</Text>

      <TextInput
        style={styles.borda}
        placeholder='Nome do Produto'
        onChangeText={(algo) => setNome(algo)}
      />

      <TextInput
        style={styles.borda}
        placeholder='Digite o valor original'
        value={valor}
        onChangeText={(num) => setValor(num)}
        keyboardType='numeric'
      />

      <TextInput
        style={styles.borda}
        placeholder='Digite a porcentagem de aumento'
        value={porcen}
        onChangeText={(num) => setPorcen(num)}
        keyboardType='numeric'
      />

      <Button
        title='Calcular'
        onPress={() => {
          if (nome && valor && porcen && !isNaN(valor) && !isNaN(porcen)) {
            setResult(valor * (porcen / 100) + +valor);
          } else {
            alert('Por favor, preencha todos os campos com valores válidos!');
          }
        }}
        color={'royalblue'}
      />

      <Text style={styles.textos}>Resultado:</Text>
      <View style={styles.resultados}>
        {result !== null && <Text style={styles.textos}>Nome do Produto: {nome}</Text>}
        {result !== null && <Text style={styles.textos}>Valor do Produto: R$ {valor}</Text>}
        {result !== null && <Text style={styles.textos}>Porcentagem de aumento: {porcen}%</Text>}
        {result !== null && <Text style={styles.textos}>Valor do aumento: R$ {valor * (porcen / 100)}</Text>}
        {result !== null && <Text style={styles.textos}>Resultado do cálculo: R$ {result}</Text>}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 22,
  },
  borda: {
    borderWidth: 2,
    borderRadius: 20,
    borderColor: 'darkblue',
    height: 40,
    width: 300,
    fontSize: 15,
    backgroundColor: '#d3d3d3',
    paddingHorizontal: 10,
  },
  texto: {
    fontSize: 20,
    fontFamily: 'arial',
  },
  resultados: {
    borderWidth: 2,
    borderColor: 'darkblue',
    padding: 10,
    width: 300,
    backgroundColor: '#d3d3d3',
  },
  textos: {
    fontSize: 18,
    fontFamily: 'arial',
  },
  nome: {
    fontSize: 12,
    fontFamily: 'arial',
    alignSelf: 'flex-start',
  }
});
