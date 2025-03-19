import { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from "react-native";
import Nome from './src/components/nome/Nome';
import Sexo from './src/components/sexo/Sexo';
import Idade from './src/components/idade/Idade';
import Limite from './src/components/limite/Limite';

class App extends Component {
  render() { 
    return ( 
      /*Tela*/ <View style={styles.container}>

        <View> {/*Quadradão de cadastro*/}
          < Nome /> {/*Componente que solicita à pessoa pra digitar o nome*/}
          < Idade />
          < Sexo />
          < Limite />
          < View />
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