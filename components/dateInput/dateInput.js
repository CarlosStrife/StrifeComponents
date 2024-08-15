import React from 'react';
import { TouchableOpacity, View, Modal, TextInput} from "react-native";
import { dateInputStyles } from "./dateInputStyles";
import Icon from 'react-native-vector-icons/FontAwesome5';
import DatePicker from 'react-native-date-picker'

  
export default class DateInput extends React.Component{
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

            date: new Date(),
            modalVisible: false,
        };
    }
    
    openModal(visible){
        this.setState({modalVisible: visible});
    }
    setDate(){
        this.setState({
            dateText: this.state.date.getFullYear() + "-" + this.month(this.state.date.getMonth()) + "-" + this.day(this.state.date.getDate()),
            modalVisible: false,
        });        
        this.props.onChangeDate(this.state.date.getFullYear() + "-" + this.month(this.state.date.getMonth()) + "-" + this.day(this.state.date.getDate()))
    }

    month(number){
        if(number < 10)
            return "0"+ (parseInt(number)+1);
        else
            return (parseInt(number)+1);
    }
    day(number){
        if(number < 10)
            return "0"+ number;
        else
            return number;
    }

    render(){
        const state = this.state;
        return(
            <View style={[dateInputStyles.container,state.containerStyle]}>
                <TextInput style={[dateInputStyles.textInput,state.textInputStyle]} placeholder='YYYY-MM-DD' placeholderTextColor={state.placeHolderColor} value={state.dateText} readOnly/>
                <TouchableOpacity onPress={() => this.openModal(true)} style={[dateInputStyles.button,state.buttonStyle]}>
                    <Icon style={dateInputStyles.icon} name={state.symbol} size={state.size} color={state.iconColor}/>
                </TouchableOpacity>
                
                <Modal animationType="slide" transparent={true} visible={state.modalVisible} onRequestClose={() => { this.openModal(!state.modalVisible); }}>
                    <View style={[dateInputStyles.modalContainer,state.modalContainerStyle]}>
                        <View style={[dateInputStyles.modalBackground,state.modalBackgroundStyle]}>
                            <View style={dateInputStyles.dateContainer}>
                                <DatePicker style={state.dateStyle} theme={state.theme} dividerColor={state.divider} onDateChange={(date) => this.setState({date})} date={state.date} mode={state.mode}/>
                            </View>
                            <View style={dateInputStyles.buttonsContainer}>
                                <TouchableOpacity style={[dateInputStyles.closeButton,state.closeButtonStyle]} onPress={() => { this.openModal(!state.modalVisible); }}>
                                    <Icon name={state.closeSymbol} color={state.closeColor} size={state.closeSize} style={dateInputStyles.modalIcon} />
                                </TouchableOpacity>
                                <TouchableOpacity style={[dateInputStyles.okButton,state.okButtonStyle]} onPress={() => this.setDate()}>
                                    <Icon name={state.okSymbol} color={state.okColor} size={state.okSize} style={dateInputStyles.modalIcon} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }

};