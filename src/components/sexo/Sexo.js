import React, { Component } from 'react';
import { View, Text, StyleSheet } from "react-native";
import {Picker} from '@react-native-picker/picker';

class Sexo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            sexo: 0,
            sexos: [
                {key: 1, value: 1, label: 'Masculino' },
                {key: 2, value: 2, label: 'Feminino'}
            ]
            
        }
    }
    render() {
                    
        let sexoItem = this.state.sexos.map((sexos) => (
            <Picker.Item key={sexos.key} label={sexos.label} value={sexos.value} />
        ))
        return (
            <View>
                <Picker 
                    selectedValue={this.state.sexo}
                    onValueChange={ (itemValue, itemIndex) => this.setState({sexo: itemValue})}
                >
                {sexoItem}
                </Picker>
            </View>
        )
    }
}

export default Sexo;