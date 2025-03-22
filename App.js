import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import Nome from './src/components/nome/Nome';
import Sexo from './src/components/sexo/Sexo';
import Idade from './src/components/idade/Idade';
import Limite from './src/components/limite/Limite';
import Estudante from './src/components/estudante/Estudante';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dadosPessoa: '',
      nome: '',
      idade: '',
      sexo: '',
      limite: 300,
      estudante: false // Corrigido para booleano
    };

    this.Cadastro = this.Cadastro.bind(this);
  }

  Cadastro = () => {
    if (this.state.nome === '' || this.state.idade === NaN || this.state.idade < 0) {
      alert('Preencha todos dados corretamente!')
      return;
    }
    
    const estudanteStatus = estudante ? 'Sim' : 'Não';
    alert(
      `Nome: ${this.state.nome}\n` +
      `Idade: ${this.state.idade}\n` +
      `Sexo: ${this.state.sexo}\n` +
      `Limite: ${this.state.limite}\n` +
      `Estudante: ${this.state.estudante}`
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Nome onChangeText={(valorNome) => this.setState({ nome: valorNome })} />
          <Idade onChangeText={(valorIdade) => this.setState({ idade: valorIdade })} />
          <Sexo onChangeText={(valorSexo) => this.setState({ sexo: valorSexo })} />
          <Limite onChangeText={(valorLimite) => this.setState({ limite: valorLimite })} />
          <Estudante onValueChange={(valorEstudante) => this.setState({ estudante: valorEstudante })} />

          <TouchableOpacity onPress={this.Cadastro} style={styles.button}>
            <Text style={styles.buttonText}>Cadastre-se aqui</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;