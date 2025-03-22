import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Alert } from "react-native";

class Idade extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idade: ""
    };
  }

  InputNumerico = (idadePessoa) => {
    const idadeNumerica = parseInt(idadePessoa) || 0; //converte o valor digitado pelo usuario em numero inteiro usando usando parseInt(idadePessoa)

    if (idadeNumerica >= 115) {
      Alert.alert("Erro", "Digite uma idade válida!");
    } else {
      this.setState({ idade: idadeNumerica });
    }
  };

  render() {
    return (
      <View>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder="Digite sua idade:"
          onChangeText={this.InputNumerico}
          value={this.state.idade.toString()} // O TextInput recebe sempre uma string como valor, por padrão,mas this.state.idade contém um número. Como tem um número, usamos .toString() para garantir que o valor exibido seja sempre uma string. -- ParseInt converte de string para numero e toString converte de numero pra string novamente.
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: "#222",
    margin: 10,
    marginTop: 45,
    fontSize: 20,
    padding: 10,
  },
});

export default Idade;