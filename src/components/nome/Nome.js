import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from "react-native";

class Nome extends Component {

    constructor(props){
        super(props)
        this.state = {
            nome: ''
        }
    }
    
  render() {
    return (
      <View>
        <TextInput style={
          styles.input}
          placeholder="Digite seu nome:"
          onChangeText ={(nomePessoa) => this.setState({nome: nomePessoa})}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    input:{
        height: 45,
        borderWidth: 1,
        borderColor: '#222',
        margin: 10,
        marginTop: 45,
        fontSize: 20,
        padding: 10,
    }
})
export default Nome;