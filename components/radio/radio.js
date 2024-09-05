import React from 'react';
import { Text, TouchableOpacity, View} from "react-native";
import { radioStyles } from "./radioStyles";

  
export default class Radio extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            containerStyle: props.containerStyle == undefined ? {} : props.containerStyle,
            ballContainerStyle: props.ballContainerStyle == undefined ? {} : props.ballContainerStyle,
            textStyle: props.textStyle == undefined ? {} : props.textStyle,
            text: props.text,

            left: [5],
            backgroundColor: ['lightgrey'],
            color: props.color == undefined ? 'white' : props.color,
            height: props.height == undefined ? 70 : props.height,
            width: props.width == undefined ? 130 : props.width,
            ballHeight: props.height == undefined ? 70-10 : props.height-10,
            ballWidth: props.width == undefined ? 130 - (130/2+5) : props.width - (props.width/2+5),
            radios: props.radios == undefined ? [] : props.radios,
            type: '1',
        };
    }

    pressed(pressedRadio){
        var leftAux = this.state.width == undefined ? 130/2 : this.state.width/2;
        var arrayCol = [];
        var arrayPos = [];
        this.state.radios.map((radio, index) => {
            arrayCol.push(pressedRadio == index ? 'rgb(20, 169, 255)' : 'lightgrey');
            arrayPos.push(pressedRadio == index ? leftAux : 5);
        })
        
        this.setState({
            left: arrayPos,
            backgroundColor: arrayCol,
        });
        
        this.props.pressed(this.state.radios[pressedRadio]);
    }
    
    render(){
        const state = this.state;
        var conta = 0;
        return(
            <View style={[radioStyles.container,state.containerStyle]}>
            {
                this.state.radios[0] != undefined ?
                state.radios.map((radio, index) => (
                    <View key={"R"+index} style={[radioStyles.radioContainer, {left: index%2 == 0 ? 10 : 180, top: index%2 == 0 ? conta*140 : conta++*140}]}>
                        <TouchableOpacity onPress={() => this.pressed(index)} style={[radioStyles.ballContainer,state.ballContainerStyle,{backgroundColor:state.backgroundColor[index] == undefined ? 'lightgrey' : state.backgroundColor[index],height:state.height,width:state.width}]}>
                            <View style={[radioStyles.ball,{left: state.left[index] == undefined ? 5 : state.left[index], backgroundColor: state.color,width:state.ballWidth,height:state.ballHeight}]}></View>
                        </TouchableOpacity>
                        <Text style={[radioStyles.radioText, state.textStyle]}>{radio}</Text>
                    </View>
                ))
                :
                <View style={radioStyles.empty}><Text style={radioStyles.emptyText}>NO HAY DATOS</Text></View>
            }
            </View>
        )
    }

};