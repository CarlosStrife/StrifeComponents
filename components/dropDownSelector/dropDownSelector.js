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
            optionStyle: props.optionStyle == undefined ? {} : props.optionStyle,
            modalContainerStyle: props.modalContainerStyle == undefined ? {} : props.modalContainerStyle,
            modalBackgroundStyle: props.modalBackgroundStyle == undefined ? {} : props.modalBackgroundStyle,
            dateStyle: props.dateStyle == undefined ? {} : props.dateStyle,
            closeButtonStyle: props.closeButtonStyle == undefined ? {} : props.closeButtonStyle,
            okButtonStyle: props.okButtonStyle == undefined ? {} : props.okButtonStyle,

            text: '',
            placeHolderColor: props.placeHolderColor == undefined ? 'lightgrey' : props.placeHolderColor,

            iconColor: props.iconColor == undefined ? 'black' : props.iconColor,
            size: props.size == undefined ? 25 : props.size,
            symbol: props.symbol == undefined ? 'caret-down' : props.symbol,

            theme: props.theme == undefined ? 'light' : props.theme,
            divider: props.divider == undefined ? 'black' : props.divider,
            mode: props.mode == undefined ? 'date' : props.mode,
            
            datos: [],
            datosAux: ['1','2','3','12','13','22','23','33'],
            datosAux: [<View style={[dropDownSelectorStyles.optionEmpty]}><Text style={dropDownSelectorStyles.optionText}>NO HAY DATOS</Text></View>],
        };
    }
    
    componentDidMount(){//me quede haciendo esto

    }

    searchCoincidences(text) {
        if(this.state.datos[0] != 'no hay datos'){
            var arregloAux = [];
            this.state.datos.map((renglon,indice) => {
                if(renglon[0].props.children.props.children.toLowerCase().includes(texto.toLowerCase()))
                    arregloAux.push([<TouchableOpacity style={[dropDownSelectorStyles.option,state.optionStyle]}><Text style={dropDownSelectorStyles.optionText}>HOLA ESTA ES UNA OPCION</Text></TouchableOpacity>]);
            })
            this.setState({
                text: text.toLowerCase(),
                datosAux: arregloAux,
            });
        }
        else{
            var arregloAux = [];
            arregloAux.push([<Row key={0} data={["no hay datos"]} widthArr={this.state.dimensionesTabla} style={[clientesEstilos.renglon, 0%2 && clientesEstilos.renglon2]} textStyle={clientesEstilos.textoContenidoTabla} maxFontSizeMultiplier={1}/>]);
            this.setState({
                text: text.toLowerCase(),
                datosAux: arregloAux,
            });
        }
    }

    render(){
        const state = this.state;
        return(
            <ScrollView contentContainerStyle={[dropDownSelectorStyles.container,state.containerStyle]} style={[dropDownSelectorStyles.scrollView,state.scrollViewStyle]}>
                <TouchableOpacity style={[dropDownSelectorStyles.button,state.buttonStyle]}>
                    <Text style={dropDownSelectorStyles.buttonText}>Selecciona Algo ...</Text>
                    <Icon style={dropDownSelectorStyles.buttonIcon} name={state.symbol} size={state.size} color={state.iconColor}/>
                </TouchableOpacity>
                <TextInput style={[dropDownSelectorStyles.textInput,state.textInputStyle]} placeholder='Buscar...' placeholderTextColor={state.placeHolderColor} value={state.text} onChangeText={(text) => { this.setState({text}); }} />
                {
                state.datosAux.map((renglon, indice) => (
                    renglon
                ))
                }
            </ScrollView>
        )
    }

};