import React from "react";
import { View, Text, Button, Modal } from "react-native";

export default class Alerta extends React.Component{
    constructor(props){
        super(props);
            this.state = {
                modalvisible: false,
            };
        }

        setmodalvisible(visible) {
            this.setState({modalvisible: visible});
        }

    render(){
        const state = this.state;
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#222831', }}>
                <Button onPress={() => this.setmodalvisible(true)} title="PROBAR ALERTA"></Button>
                
                <Modal animationType="slide" transparent={true} visible={state.modalvisible} onRequestClose={() => { this.setmodalvisible(!state.modalvisible); }}>
                    <View style={{flex:1}}>
                    </View>
                    <View style={{backgroundColor: 'white', width: '60%',flex:1,justifyContent: 'center', alignItems: 'center', alignSelf: 'center'}}>
                        <Text style={{color: 'red'}}>Hola Mundo</Text>
                    </View>
                    <View style={{flex:1}}>
                    </View>
                </Modal>
            </View>
        );
    }
}