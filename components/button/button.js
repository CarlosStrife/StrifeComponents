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
            leftColor: props.leftColor == undefined ? "black" : props.leftColor,
            rightColor: props.rightColor == undefined ? "black" : props.rightColor,
            leftSize: props.leftSize == undefined ? 48 : props.leftSize,
            rightSize: props.rightSize == undefined ? 48 : props.rightSize,
            leftSymbol: props.leftSymbol == undefined ? "hamburger" : props.leftSymbol,
            rightSymbol: props.rightSymbol == undefined ? "guitar" : props.rightSymbol,
            text: props.text,
            onPress: props.onPress,
        };
    }
    
    
    render(){
        const state = this.state;
        return(
            <TouchableOpacity onPress={state.onPress} style={[buttonStyles.container,state.containerStyle]}>
                {state.iconLeft && <View style={buttonStyles.rightIconContainer}><Icon name={state.leftSymbol} size={state.leftSize} color={state.leftColor} style={buttonStyles.leftIcon}/></View>}
                {state.text == undefined ? '' :<Text style={[buttonStyles.text,state.textStyle]}>{state.text}</Text>}
                {state.iconRight && <View style={buttonStyles.leftIconContainer}><Icon name={state.rightSymbol} size={state.rightSize} color={state.rightColor} style={buttonStyles.rightIcon}/></View>}
            </TouchableOpacity>
        )
    }

};