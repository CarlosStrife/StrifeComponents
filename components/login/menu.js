import React, { useState } from 'react';
import { Text, View, Image, ScrollView,ImageBackground, TouchableHighlight} from 'react-native';
import { menuStyles } from "./menuStyles";
import Icon from 'react-native-vector-icons/FontAwesome5';


export function Menu(props){
    return(        
        <ImageBackground style={menuStyles.contenedorPrincipal} source={require('../../assets/fondo.jpg')} >
            <View style={menuStyles.contenedorCabecera}>
                <Image source={require('../../assets/fondo.jpg')} style={menuStyles.imagenUsuario}/>
                <Text style={menuStyles.numeroUsuario} maxFontSizeMultiplier={1}>ID: {props.idUsuario}</Text>
                <Text style={menuStyles.nombreUsuario} maxFontSizeMultiplier={1}>{props.nombreUsuario}</Text>
                <Text style={menuStyles.correoUsuario} maxFontSizeMultiplier={1}>{props.correoUsuario}</Text>
                <Text style={menuStyles.sucursal} maxFontSizeMultiplier={1}>{props.sucursal}</Text>
            </View>
            
            <View style={menuStyles.contenedorCentral}>      
                <ScrollView contentContainerStyle={menuStyles.scroll}>
                        <View style={menuStyles.contenedorBoton}>
                            <TouchableHighlight onPress={() => props.navigation.navigate('Ejemplo')} style={menuStyles.botonMenu}><Icon name="home" size={40} color="white"/></TouchableHighlight>
                        </View>
                        <View style={menuStyles.contenedorBoton}>
                            <TouchableHighlight onPress={() => props.navigation.navigate('Estado De Cuenta')} style={menuStyles.botonMenu}><Icon name="money-check-alt" size={20} color="white"/></TouchableHighlight>
                        </View>
                </ScrollView>
            </View>
            <View style={menuStyles.contenedorPie}>   
                <TouchableHighlight onPress={() => props.closeSesion()} titleStyle={menuStyles.botonTexto} title="Cerrar Sesion "><Icon name="hand-peace" size={20} color="white"/></TouchableHighlight>
            </View>
        </ImageBackground>
    );
}