import React from 'react';
import { Text, Image, TextInput, ImageBackground, View, StatusBar, TouchableHighlight, TouchableOpacity} from "react-native";
import { inicioEstilos } from "../styles/main";
import TextBox from '../components/textBox/textBox';

  
export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pantalla: 'main',
        };
    }
    
    
    render(){
        const state = this.state;
            if(state.pantalla == 'main')
            return(
                <View>
                    <Text style={inicioEstilos.etiqueta} maxFontSizeMultiplier={1}>Correoed:</Text>
                    <TextBox></TextBox>
                </View>
            )
    }

};