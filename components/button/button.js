import React from 'react';
import { Text, TouchableOpacity, View} from "react-native";
import { buttonStyles } from "./buttonStyles";
import Icon from 'react-native-vector-icons/FontAwesome5';

  
export default class Button extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            iconLeft: props.iconLeft == undefined ? false : props.iconLeft,
            iconRight: props.iconRight == undefined ? false : props.iconRight,
            containerStyle: props.containerStyle == undefined ? {} : props.containerStyle,
            textStyle: props.textStyle == undefined ? {} : props.textStyle,
            leftColor: props.leftColor,
            rightColor: props.rightColor,
            leftSize: props.leftSize,
            rightSize: props.rightSize,
            leftSymbol: props.leftSymbol,
            rightSymbol: props.rightSymbol,
            text: props.text,
            onPress: props.onPress,
        };
    }
    
    
    render(){
        const state = this.state;
        return(
            <TouchableOpacity onPress={state.onPress} style={[buttonStyles.container,state.containerStyle]}>
                {state.iconLeft && <View style={buttonStyles.rightIconContainer}><Icon name={state.leftSymbol == undefined ? "hamburger" : state.leftSymbol} size={state.leftSize == undefined ? 48 : state.leftSize} color={state.leftColor == undefined ? "black" : state.leftColor} style={buttonStyles.leftIcon}/></View>}
                {state.text == undefined ? '' :<Text style={[buttonStyles.text,state.textStyle]}>{state.text}</Text>}
                {state.iconRight && <View style={buttonStyles.leftIconContainer}><Icon name={state.rightSymbol == undefined ? "guitar" : state.rightSymbol} size={state.rightSize == undefined ? 48 : state.rightSize} color={state.rightColor == undefined ? "black" : state.rightColor} style={buttonStyles.rightIcon}/></View>}
            </TouchableOpacity>
        )
    }

};