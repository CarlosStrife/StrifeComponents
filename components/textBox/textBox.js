import React from 'react';
import { Text, TextInput, View,} from "react-native";
import { textBoxStyles } from "./textBoxStyles";

  
export default class TextBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            type: props.type == undefined ? '1' : props.type,
            label: props.label == undefined ? false : props.label,
            containerStyle: props.containerStyle == undefined ? {} : props.containerStyle,
            labelStyle: props.labelStyle == undefined ? {} : props.labelStyle,
            inputStyle: props.inputStyle == undefined ? {} : props.inputStyle,
            placeHolder: props.placeHolder == undefined ? 'placeholder' : props.placeHolder,
            labelText: props.labelText == undefined ? 'Etiqueta 1:' : props.labelText,
            onChangeText: props.onChangeText,
        };
    }
    
    
    render(){
        const state = this.state;
        if(state.type == '1')
            return(
                <View style={[textBoxStyles.container1,state.containerStyle]}>
                    { state.label && <Text style={[textBoxStyles.label1,state.labelStyle]} maxFontSizeMultiplier={1}>{state.labelText}</Text>}
                    <TextInput onChangeText={state.onChangeText} style={[textBoxStyles.textBox1,state.inputStyle]} placeholder={state.placeHolder} placeholderTextColor={'grey'}/>
                </View>
            )
        else if(state.type == '2')
            return(
                <View style={[textBoxStyles.container2,state.containerStyle]}>
                    { state.label && <Text style={[textBoxStyles.label2,state.labelStyle]} maxFontSizeMultiplier={1}>{state.labelText}</Text>}
                    <TextInput onChangeText={state.onChangeText} style={[textBoxStyles.textBox2,state.inputStyle]} placeholder={state.placeHolder} placeholderTextColor={'grey'}/>
                </View>
            )
        else if(state.type == '3')
            return(
                <View style={[textBoxStyles.container3,state.containerStyle]}>
                    { state.label && <Text style={[textBoxStyles.label3,state.labelStyle]} maxFontSizeMultiplier={1}>{state.labelText}</Text>}
                    <TextInput onChangeText={state.onChangeText} style={[textBoxStyles.textBox3,state.inputStyle]} placeholder={state.placeHolder} placeholderTextColor={'grey'}/>
                </View>
            )
    }

};