import React from 'react';
import { TouchableOpacity, View, TextInput} from "react-native";
import { dropDownSelectorStyles } from "./dropDownSelectorStyles";
import Icon from 'react-native-vector-icons/FontAwesome5';

  
export default class DropDownSelector extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            containerStyle: props.containerStyle == undefined ? {} : props.containerStyle,
            textInputStyle: props.textInputStyle == undefined ? {} : props.textInputStyle,
            buttonStyle: props.buttonStyle == undefined ? {} : props.buttonStyle,
            modalContainerStyle: props.modalContainerStyle == undefined ? {} : props.modalContainerStyle,
            modalBackgroundStyle: props.modalBackgroundStyle == undefined ? {} : props.modalBackgroundStyle,
            dateStyle: props.dateStyle == undefined ? {} : props.dateStyle,
            closeButtonStyle: props.closeButtonStyle == undefined ? {} : props.closeButtonStyle,
            okButtonStyle: props.okButtonStyle == undefined ? {} : props.okButtonStyle,

            dateText: props.value == undefined ? '' : props.value,
            placeHolderColor: props.placeHolderColor == undefined ? 'lightgrey' : props.placeHolderColor,

            iconColor: props.iconColor == undefined ? 'black' : props.iconColor,
            size: props.size == undefined ? 48 : props.size,
            symbol: props.symbol == undefined ? 'calendar' : props.symbol,

            theme: props.theme == undefined ? 'light' : props.theme,
            divider: props.divider == undefined ? 'black' : props.divider,
            mode: props.mode == undefined ? 'date' : props.mode,

            closeSymbol: props.okSymbol == undefined ? 'times-circle' : props.okSymbol,
            okSymbol: props.closeSymbol == undefined ? 'check-circle' : props.closeSymbol,
            okColor: props.okColor == undefined ? "'rgb(255, 66, 124)'" : props.okColor,
            closeColor: props.closeColor == undefined ? "'rgb(0, 209, 63)'" : props.closeColor,
            okSize: props.okSize == undefined ? 48 : props.okSize,
            closeSize: props.closeSize == undefined ? 48 : props.closeSize,

        };
    }
    

    render(){
        const state = this.state;
        return(
            <View style={[dropDownSelectorStyles.container,state.containerStyle]}>
                <TouchableOpacity style={[dropDownSelectorStyles.button,state.buttonStyle]}>
                    <Icon style={dropDownSelectorStyles.icon} name={state.symbol} size={state.size} color={state.iconColor}/>
                </TouchableOpacity>
                <TextInput style={[dropDownSelectorStyles.textInput,state.textInputStyle]} placeholder='YYYY-MM-DD' placeholderTextColor={state.placeHolderColor} value={state.dateText} readOnly/>
            </View>
        )
    }

};