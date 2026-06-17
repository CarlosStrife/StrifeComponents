import React from 'react';
import { Text, View, Image, ScrollView,ImageBackground, TouchableHighlight} from 'react-native';
import { menuStyles } from "./menuStyles";
import Icon from 'react-native-vector-icons/FontAwesome5';


export function Menu(props){
    return(        
        <ImageBackground style={menuStyles.principalContainer} source={require('../../assets/fondo.jpg')} >
            <View style={menuStyles.headerContainer}>
                <Image source={require('../../assets/fondo.jpg')} style={menuStyles.userImage}/>
                <Text style={menuStyles.numeroUsuario} maxFontSizeMultiplier={1}>ID: {props.idUsuario}</Text>
                <Text style={menuStyles.nombreUsuario} maxFontSizeMultiplier={1}>{props.nombreUsuario}</Text>
                <Text style={menuStyles.correoUsuario} maxFontSizeMultiplier={1}>{props.correoUsuario}</Text>
                <Text style={menuStyles.sucursal} maxFontSizeMultiplier={1}>{props.sucursal}</Text>
            </View>
            
            <View style={menuStyles.centralContainer}>      
                <ScrollView contentContainerStyle={menuStyles.scroll}>
                    <View style={menuStyles.buttonContainer}>
                        <TouchableHighlight onPress={() => props.navigation.navigate('Ejemplo')} style={menuStyles.menuButton}><Icon name="home" size={40} color="white"/></TouchableHighlight>
                    </View>
                    <View style={menuStyles.buttonContainer}>
                        <TouchableHighlight onPress={() => props.navigation.navigate('Ejemplo')} style={menuStyles.menuButton}><View style={menuStyles.buttonInteriorContainer}><Icon name="money-check-alt" size={20} color="white" style={menuStyles.buttonIcon}/><Text style={menuStyles.buttonText} maxFontSizeMultiplier={1}>MENU PRUEBA</Text></View></TouchableHighlight>
                    </View>
                </ScrollView>
            </View>
            <View style={menuStyles.footerContainer}>  
                <TouchableHighlight onPress={() => props.closeSesion()} style={menuStyles.menuButton}><View style={menuStyles.buttonInteriorContainer}><Icon name="hand-peace" size={20} color="white" style={menuStyles.buttonIcon}/><Text style={menuStyles.buttonText} maxFontSizeMultiplier={1}>Cerrar Sesion</Text></View></TouchableHighlight>
            </View>
        </ImageBackground>
    );
}