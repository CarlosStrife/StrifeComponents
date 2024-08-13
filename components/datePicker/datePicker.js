import React from 'react';
import { Text, TouchableOpacity, View} from "react-native";
import { datePickerStyles } from "./datePickerStyles";
import Icon from 'react-native-vector-icons/FontAwesome5';

  
export default class DatePicker extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            containerStyle: props.containerStyle == undefined ? {} : props.containerStyle,
            iconColor: props.iconColor,
            size: props.size,
            symbol: props.symbol,
            onPress: props.onPress,
        };
    }
    
    
    render(){
        const state = this.state;
        return(
            <TouchableOpacity onPress={state.onPress} style={[datePickerStyles.container,state.containerStyle]}>
                <View style={datePickerStyles.iconContainer}><Icon name={state.symbol == undefined ? "calendar" : state.symbol} size={state.size == undefined ? 48 : state.size} color={state.iconColor == undefined ? "black" : state.iconColor} style={datePickerStyles.icon}/></View>
            </TouchableOpacity>
        )
    }

};