import React from 'react';
import { Text, TouchableOpacity, View} from "react-native";
import { radioStyles } from "./radioStyles";

  
export default class Radio extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            containerStyle: props.containerStyle == undefined ? {} : props.containerStyle,
            textStyle: props.textStyle == undefined ? {} : props.textStyle,
            text: props.text,

            left: props.width == undefined ? 130/2 : props.width/2,
            value: true,
            backgroundColor: 'rgb(20, 169, 255)',
            color: 'white',
            height: props.height == undefined ? 70 : props.height,
            width: props.width == undefined ? 130 : props.width,
            ballHeight: props.height == undefined ? 70-10 : props.height-10,
            ballWidth: props.width == undefined ? 130 - (130/2+5) : props.width - (props.width/2+5),
        };
    }
    
    
    onOff(){
        if(this.state.value == true){
            this.setState({
                left: 5,
                value: false,
                backgroundColor: 'lightgrey',
            });
        }
        else{
            this.setState({
                left: this.state.width == undefined ? 130/2 : this.state.width/2,
                value: true,
                backgroundColor: 'rgb(20, 169, 255)',
            });
        }
    }
    
    render(){
        const state = this.state;
        return(
            <View>
            <TouchableOpacity onPress={() => this.onOff()} style={[radioStyles.container,state.containerStyle,{backgroundColor:state.backgroundColor,height:state.height,width:state.width}]}>
                <View style={[radioStyles.ball,{left: state.left, backgroundColor: state.color,width:state.ballWidth,height:state.ballHeight}]}></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onOff()} style={[radioStyles.container,state.containerStyle,{backgroundColor:state.backgroundColor,height:state.height,width:state.width}]}>
                <View style={[radioStyles.ball,{left: state.left, backgroundColor: state.color,width:state.ballWidth,height:state.ballHeight}]}></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onOff()} style={[radioStyles.container,state.containerStyle,{backgroundColor:state.backgroundColor,height:state.height,width:state.width}]}>
                <View style={[radioStyles.ball,{left: state.left, backgroundColor: state.color,width:state.ballWidth,height:state.ballHeight}]}></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onOff()} style={[radioStyles.container,state.containerStyle,{backgroundColor:state.backgroundColor,height:state.height,width:state.width}]}>
                <View style={[radioStyles.ball,{left: state.left, backgroundColor: state.color,width:state.ballWidth,height:state.ballHeight}]}></View>
            </TouchableOpacity>
            </View>
        )
    }

};