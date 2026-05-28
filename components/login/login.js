import React from 'react';
import { View, ImageBackground, StatusBar, Image, TouchableOpacity, Text, TouchableHighlight, TextInput} from "react-native";
import { loginStyles } from "./loginStyles";

  
export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            statusBarColor: props.statusBarColor == undefined ? "#BAE8F7" : props.statusBarColor,
            logoBool: props.logoBool == undefined ? false : true
        };
    }
    
    render(){
        const state = this.state;
        return(
                <ImageBackground style={loginStyles.mainContainer} source={require('../../assets/fondo.jpg')} >
                    <StatusBar backgroundColor={state.statusBarColor}/>
                    {state.logoBool && <Image style={loginStyles.logo} source={require('../../assets/cs.jpg')} />}
                    <Text style={loginStyles.label} maxFontSizeMultiplier={1}>Correo:</Text>
                    <TextInput style={loginStyles.textBox} value={state.usuario} onChangeText={(usuario) => this.setState({usuario})} autoCapitalize="none" placeholder="Escribe tu correo..." placeholderTextColor={"grey"} maxFontSizeMultiplier={1}/>
                    <Text style={loginStyles.label} maxFontSizeMultiplier={1}>Contraseña:</Text>
                    <TextInput style={loginStyles.textBox} value={state.contrasena} onChangeText={(contrasena) => this.setState({contrasena})} autoCapitalize="none" secureTextEntry={true} placeholder="Escribe tu contraeña..." placeholderTextColor={"grey"} maxFontSizeMultiplier={1}/>
                    <TouchableOpacity><Text style={loginStyles.link} onPress={() => {this.setState({pantalla: 'restablecer'})}} maxFontSizeMultiplier={1}>Restablecer Contraseña</Text></TouchableOpacity>
                    <Text style={loginStyles.labelWrong} maxFontSizeMultiplier={1}>{state.respuesta}</Text>
                    <TouchableHighlight style={loginStyles.button} onPress={() => this.iniciarSesion()}><Text style={loginStyles.buttonText} maxFontSizeMultiplier={1}>Iniciar Sesion</Text></TouchableHighlight>
                </ImageBackground>
        )
    }

};