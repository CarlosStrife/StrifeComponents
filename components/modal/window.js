import React from 'react';
import { Text, TouchableHighlight, View, Modal, TextInput, ScrollView} from "react-native";
import { windowStyles } from "./windowStyles";

  
export default class Window extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            containerStyle: props.containerStyle == undefined ? {} : props.containerStyle,
            backgroundStyle: props.backgroundStyle == undefined ? {} : props.backgroundStyle,
            headerStyle: props.headerStyle == undefined ? {} : props.headerStyle,
            titleStyle: props.titleStyle == undefined ? {} : props.titleStyle,
            contentStyle: props.contentStyle == undefined ? {} : props.contentStyle,
            labelStyle: props.labelStyle == undefined ? {} : props.labelStyle,
            textBoxStyle: props.textBoxStyle == undefined ? {} : props.textBoxStyle,
            footerStyle: props.footerStyle == undefined ? {} : props.footerStyle,
            acceptButtonStyle: props.acceptButtonStyle == undefined ? {} : props.acceptButtonStyle,
            acceptButtonTextStyle: props.acceptButtonTextStyle == undefined ? {} : props.acceptButtonTextStyle,
            cancelButtonStyle: props.cancelButtonStyle == undefined ? {} : props.cancelButtonStyle,
            cancelButtonTextStyle: props.cancelButtonTextStyle == undefined ? {} : props.cancelButtonTextStyle,
            textoEjemplo: "",
            animation: props.animation == undefined ? "slide" : props.animation,
            title: props.title == undefined ? "Modal Ejemplo" : props.title,
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
                <Modal animationType={state.animation} transparent={true} visible={this.props.modalVisible} onRequestClose={() => { this.setModalVisible(false); }}>
                    <View style={[windowStyles.container,state.containerStyle]}>
                        <View style={[windowStyles.backgroundModal,state.backgroundStyle]}>
                        <ScrollView contentContainerStyle={windowStyles.scrollModal}>
                            <View style={[windowStyles.headerModal,state.headerStyle]}>
                                <Text style={[windowStyles.titleModal,state.titleStyle]} maxFontSizeMultiplier={1}>{state.title}</Text>
                            </View>
                            <View style={[windowStyles.contentModal,state.contentStyle]}>
                                <Text style={[windowStyles.label,state.labelStyle]} maxFontSizeMultiplier={1}>Etiqueta Ejemplo</Text>
                                <TextInput style={[windowStyles.textBox,state.textBoxStyle]} value={state.textoEjemplo} onChangeText={(textoEjemplo) => this.setState({textoEjemplo})} editable = {true} maxFontSizeMultiplier={1} />
                            </View>
                            <View style={[windowStyles.footerModal,state.footerStyle]}>
                                <TouchableHighlight onPress={() => this.save()} style={[windowStyles.acceptButton,state.acceptButtonStyle]}><Text style={[windowStyles.acceptButtonText,state.acceptButtonTextStyle]} maxFontSizeMultiplier={1}>Aceptar</Text></TouchableHighlight>
                                <TouchableHighlight onPress={() => this.setModalVisible(false)} style={[windowStyles.cancelButton,state.cancelButtonStyle]}><Text style={[windowStyles.cancelButtonText,state.cancelButtonTextStyle]} maxFontSizeMultiplier={1}>Cancelar</Text></TouchableHighlight>
                            </View>
                        </ScrollView>
                        </View>
                    </View>
                </Modal>
        )
    }

};