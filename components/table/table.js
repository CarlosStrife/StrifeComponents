import React from 'react';
import { TouchableOpacity, View, TextInput, ScrollView, Text} from "react-native";
import { tableStyles } from "./tableStyles";
import Icon from 'react-native-vector-icons/FontAwesome5';

  
export default class Table extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            scrollViewStyle: props.scrollViewStyle == undefined ? {} : props.scrollViewStyle,
            containerStyle: props.containerStyle == undefined ? {} : props.containerStyle,
            textInputStyle: props.textInputStyle == undefined ? {} : props.textInputStyle,
            buttonStyle: props.buttonStyle == undefined ? {} : props.buttonStyle,
            buttonTextStyle: props.buttonTextStyle == undefined ? {} : props.buttonTextStyle,
            optionStyle: props.optionStyle == undefined ? {} : props.optionStyle,
            optionTextStyle: props.optionTextStyle == undefined ? {} : props.optionTextStyle,

            placeHolderColor: props.placeHolderColor == undefined ? 'lightgrey' : props.placeHolderColor,
            
            text: '',
                        
            datasHeader: props.datasHeader == undefined ? [] : props.datasHeader,
            datas: props.datas == undefined ? [] : props.datas,
            datasAux: [],
        };
    }
    
    componentDidMount(){
        if(this.state.datas[0] != undefined){
            var array = [];
            this.state.datas.map((option,index) => {
                array.push(option.toString());
            })
            this.setState({
                datasAux: array,
            });
        }
    }

    searchCoincidences(text) {
        if(this.state.datas[0] != undefined){
            var array = [];
            this.state.datas.map((option,index) => {
                if(option.toString().toLowerCase().includes(text.toLowerCase()))
                    array.push(option.toString());
            })
            this.setState({
                text: text.toLowerCase(),
                datasAux: array,
            });
        }
    }

    render(){
        const state = this.state;
        return(
            <View style={tableStyles.container}>
                <TextInput style={[tableStyles.textInput,state.textInputStyle]} placeholder='Buscar...' placeholderTextColor={state.placeHolderColor} value={state.text} onChangeText={(text) => this.searchCoincidences(text)} />
                <ScrollView horizontal={true}>
                    <ScrollView>
                        <View style={tableStyles.table}>
                            <View style={tableStyles.rowHeader}>
                                {
                                    this.state.datasHeader[0] != undefined ?
                                    state.datasHeader.map((cell, index) => (
                                        <View key={index} style={tableStyles.cellHeader}>{cell}</View>
                                    )) 
                                    :
                                    <Text style={tableStyles.headerText}>NO HAY DATOS</Text>
                                }
                            </View>
                            <View style={tableStyles.row}>
                                <View style={tableStyles.cell}><Text>HOLA</Text></View>
                                <View style={tableStyles.cell}><Text>HOLA</Text></View>
                                <View style={tableStyles.cell}><Text>HOLA</Text></View>
                                <View style={tableStyles.cell}><Text>HOLA</Text></View>
                                <View style={tableStyles.cell}><Text>HOLA</Text></View>
                            </View>
                            <View style={tableStyles.row2}>
                                <View style={tableStyles.cell}><Text>HOLA</Text></View>
                                <View style={tableStyles.cell}><Text>HOLA</Text></View>
                                <View style={tableStyles.cell}><Text>HOLA</Text></View>
                                <View style={tableStyles.cell}><Text>HOLA</Text></View>
                                <View style={tableStyles.cell}><Text>HOLA</Text></View>
                            </View>
                        </View>
                    </ScrollView>
                </ScrollView>
            </View>
        )
    }

};