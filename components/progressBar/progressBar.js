import React from 'react';
import { View} from "react-native";
import { progressBarStyles } from "./progressBarStyles";

  
export default class ProgressBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            containerStyle: props.containerStyle == undefined ? {} : props.containerStyle,
            barRowStyle: props.barRowStyle == undefined ? {} : props.barRowStyle,
            color: props.color == undefined ? 'blue' : props.color,
            color2: props.color2 == undefined ? 'transparent' : props.color2,

            value: props.value == undefined ? .7 : props.value,
        };
    }
    
    render(){
        const state = this.state;
        return(
            <View style={[progressBarStyles.container,state.containerStyle]}>
                <View style={[progressBarStyles.barRow,state.barRowStyle]}>
                <View style={[progressBarStyles.bar,{flex: state.value, backgroundColor: state.color}]}></View>
                <View style={[progressBarStyles.bar2,state.bar2Style,{flex: 1-state.value, backgroundColor: state.color2}]}></View>
                </View>
            </View>
        )
    }

};