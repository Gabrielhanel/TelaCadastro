import Pessoas from './src/components/nome/Nome';
import { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from "react-native";

class App extends Component {
  render() { 
    return ( 
      /*Tela*/ <View style={styles.container}>
        <View> {/*Quadradão de cadastro*/}
          <Pessoas /> {/*Componente que solicita à pessoa pra digitar o nome*/}
        
        
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;