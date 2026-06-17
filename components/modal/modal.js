import React from 'react';
import { Text, TouchableHighlight, View, Modal, TextInput} from "react-native";
import { modalStyles } from "./modalStyles";

  
export default class Modal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            containerStyle: props.containerStyle == undefined ? {} : props.containerStyle,
            onPress: props.onPress,
            modalvisible: false,
        };
    }
    
    save() {
        //nada
    }

    setModalVisible(visible) {
        this.setState({modalvisible: visible});
    }
    
    render(){
        const state = this.state;
        return(
                <Modal animationType="slide" transparent={true} visible={state.modalvisible} onRequestClose={() => { this.setmodalvisible(!state.modalvisible); }}>
                    <View style={modalStyles.contenedorModal}>
                        <View style={modalStyles.fondoModal}>
                        <ScrollView contentContainerStyle={modalStyles.scrollModal}>
                            <View style={modalStyles.cabeceraModal}>
                                <Text style={modalStyles.tituloModal} maxFontSizeMultiplier={1}>Nuevo Vale</Text>
                            </View>
                            <View style={modalStyles.contenidoModal}>
                                <Text style={modalStyles.etiqueta8} maxFontSizeMultiplier={1}>Pago Quincenal</Text>
                                <TextInput style={modalStyles.cajaTexto2} value={state.pagoQuincenal} onChangeText={(pagoQuincenal) => this.setState({pagoQuincenal})} editable = {false} maxFontSizeMultiplier={1}></TextInput>
                            </View>
                            <View style={modalStyles.pieModal}>
                                <TouchableHighlight onPress={() => this.save()} style={modalStyles.boton2}><Text style={modalStyles.botonTexto2} maxFontSizeMultiplier={1}>Guardar</Text></TouchableHighlight>
                                <TouchableHighlight onPress={() => this.setModalVisible(false)} style={modalStyles.boton3}><Text style={modalStyles.botonTexto3} maxFontSizeMultiplier={1}>Cerrar</Text></TouchableHighlight>
                            </View>
                        </ScrollView>
                        </View>
                    </View>
                </Modal>
        )
    }

};