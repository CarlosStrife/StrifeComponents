import React from 'react';
import { Text, Image, TextInput, ImageBackground, View, StatusBar, TouchableHighlight, TouchableOpacity} from "react-native";
import { textBoxStyles } from "./textBoxStyles";

  
export default class TextBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            type: props.type == undefined ? '1' : props.type,
            label: props.label == undefined ? false : props.label,
        };
    }
    
    
    render(){
        const state = this.state;
        if(state.type == '1')
            return(
                <View style={textBoxStyles.container}>
                    { state.label && <Text style={textBoxStyles.label} maxFontSizeMultiplier={1}>Etiqueta 1:</Text>}
                    <TextInput style={textBoxStyles.textBox} placeholder={'placeholder'} placeholderTextColor={'grey'}/>
                </View>
            )
        else if(state.type == '2')
            return(
                <View style={textBoxStyles.container2}>
                    { state.label && <Text style={textBoxStyles.label2} maxFontSizeMultiplier={1}>Etiqueta 2:</Text>}
                    <TextInput style={textBoxStyles.textBox2} placeholder={'placeholder'} placeholderTextColor={'grey'}/>
                </View>
            )
        else if(state.type == '3')
            return(
                <View style={textBoxStyles.container3}>
                    { state.label && <Text style={textBoxStyles.label3} maxFontSizeMultiplier={1}>Etiqueta 3:</Text>}
                    <TextInput style={textBoxStyles.textBox3} placeholder={'placeholder'} placeholderTextColor={'grey'}/>
                </View>
            )
    }

};