import React, {Component} from "react";
import {View, Text, StyleSheet, Switch} from "react-native";

class Estudante extends Component {
    constructor(props){
        super(props)
        this.state = {
            ligado: false
        }
    }
    render() {
        return (
            <View >
                <View style={{flexDirection: 'row'}}>
                    <Text style={{marginRight: 20, fontSize: 20, marginTop: 30}}>Não</Text>
                    <Switch
                    style={{alignItems:'center', justifyContent:'center', flexDirection: 'row', alignSelf:'center', paddingTop: 20 }}
                    value={this.state.ligado}
                    onValueChange={(valorSwitch) => this.setState ({ligado: valorSwitch})}
                    thumbColor={'blue'}
                    />
                        {(this.state.ligado) ? "Estudante" : "Não estudante"}

                    <Text style={{marginLeft: 20, fontSize: 20, marginTop: 30}}> Estudante </Text>
                </View>
            </View>
        )
        }
    }
    export default Estudante;