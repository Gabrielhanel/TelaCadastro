import React, { Component } from 'react';
import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";

class Limite extends Component {
    constructor(props){
        super(props)
          this.state = { 
            valor: 0
          }
      }
    render(){
        return (
            <View>
                < Slider 
                minimumValue={1} //valor minimo
                maximumValue={50000} // valor max
                minimumTrackTintColor="#007AFF" //cor da linha atrás da bolinha
                maximumTrackTintColor="#FF4500" //cor na frente da bolinha
                onValueChange={(valorSelecionado) => this.setState({valor: valorSelecionado})}
                value={this.state.valor}
                />
                <Text style={{textAlign: 'center', fontSize: 20
                }}>{this.state.valor.toFixed(0)}</Text>
            </View>
        )
    }
}

export default Limite;