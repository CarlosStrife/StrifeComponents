import React from 'react';
import { Text, Image, TextInput, ImageBackground, View, StatusBar, TouchableHighlight, TouchableOpacity} from "react-native";
import { textBoxStyles } from "./textBoxStyles";

  
export default class TextBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }
    
    
    render(){
        const state = this.state;
            return(
                <View>
                    <Text style={textBoxStyles.etiqueta} maxFontSizeMultiplier={1}>CAJA TEXTO:</Text>
                    <TextInput style={{backgroundColor: 'red'}} />
                </View>
            )
    }

};