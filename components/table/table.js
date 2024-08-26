import React from 'react';
import { TouchableOpacity, View, TextInput, ScrollView, Text} from "react-native";
import { dropDownSelectorStyles } from "./dropDownSelectorStyles";
import Icon from 'react-native-vector-icons/FontAwesome5';

  
export default class DropDownSelector extends React.Component{
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
            option: props.placeHolderOption == undefined ? 'Selecciona' : props.placeHolderOption,
            
            display: 'none',
            text: '',

            iconColor: props.iconColor == undefined ? 'black' : props.iconColor,
            size: props.size == undefined ? 25 : props.size,
            symbol: props.symbol == undefined ? 'caret-down' : props.symbol,

            
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

    showOptions(){
        if(this.state.display == 'none')
            this.setState({display: 'flex'});
        else
            this.setState({display: 'none'});
    }
    selectOption(option){
        this.setState({
            display: 'none',
            option: option,
        });
        this.props.onChangeOption(option);
    }
    render(){
        const state = this.state;
        return(
            <ScrollView contentContainerStyle={[dropDownSelectorStyles.container,state.containerStyle]} style={[dropDownSelectorStyles.scrollView,state.scrollViewStyle]}>
                
                <TouchableOpacity style={[dropDownSelectorStyles.button,state.buttonStyle]} onPress={() => this.showOptions()}>
                    <Text style={[dropDownSelectorStyles.buttonText,state.buttonTextStyle]}>{state.option}</Text>
                    <Icon style={dropDownSelectorStyles.buttonIcon} name={state.symbol} size={state.size} color={state.iconColor}/>
                </TouchableOpacity>
                <TextInput style={[dropDownSelectorStyles.textInput,state.textInputStyle, {display: state.display}]} placeholder='Buscar...' placeholderTextColor={state.placeHolderColor} value={state.text} onChangeText={(text) => this.searchCoincidences(text)} />
                {
                    this.state.datasAux[0] != undefined ?
                    state.datasAux.map((option, index) => (
                        <TouchableOpacity key={index} style={[dropDownSelectorStyles.option,this.state.optionStyle, {display: this.state.display}]} onPress={() => this.selectOption(option)}><Text style={[dropDownSelectorStyles.optionText, state.optionTextStyle]}>{option}</Text></TouchableOpacity>
                    )) 
                    :
                    <View style={[dropDownSelectorStyles.optionEmpty, {display: this.state.display}]}><Text style={dropDownSelectorStyles.optionText}>NO HAY DATOS</Text></View>
                }
            </ScrollView>
        )
    }

};