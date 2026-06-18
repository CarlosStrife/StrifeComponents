import React from 'react';
import { Text, TouchableHighlight, View, Modal, TextInput, ScrollView} from "react-native";
import { windowStyles } from "./windowStyles";

  
export default class Window extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            containerStyle: props.containerStyle == undefined ? {} : props.containerStyle,
            onPress: props.onPress,
            textoEjemplo: "",
        };
    }
    setModalVisible(visible){
        this.props.setModalVisible(visible);
    }
    save() {
        //nada
    }
    
    render(){
        const state = this.state;
        return(
                <Modal animationType="slide" transparent={true} visible={this.props.modalVisible} onRequestClose={() => { this.setModalVisible(false); }}>
                    <View style={[windowStyles.container,state.containerStyle]}>
                        <View style={[windowStyles.backgroundModal,state.containerStyle]}>
                        <ScrollView contentContainerStyle={windowStyles.scrollModal}>
                            <View style={windowStyles.cabeceraModal}>
                                <Text style={windowStyles.tituloModal} maxFontSizeMultiplier={1}>Modal Ejemplo</Text>
                            </View>
                            <View style={windowStyles.contenidoModal}>
                                <Text style={windowStyles.etiqueta8} maxFontSizeMultiplier={1}>Etiqueta Ejemplo</Text>
                                <TextInput style={windowStyles.cajaTexto2} value={state.pagoQuincenal} onChangeText={(textEjemplo) => this.setState({textoEjemplo})} editable = {false} maxFontSizeMultiplier={1} />
                            </View>
                            <View style={windowStyles.pieModal}>
                                <TouchableHighlight onPress={() => this.save()} style={windowStyles.boton2}><Text style={windowStyles.botonTexto2} maxFontSizeMultiplier={1}>Aceptar</Text></TouchableHighlight>
                                <TouchableHighlight onPress={() => this.setModalVisible(false)} style={windowStyles.boton3}><Text style={windowStyles.botonTexto3} maxFontSizeMultiplier={1}>Cancelar</Text></TouchableHighlight>
                            </View>
                        </ScrollView>
                        </View>
                    </View>
                </Modal>
        )
    }

};