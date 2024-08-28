import React from 'react';
import { View, TextInput, ScrollView, Text} from "react-native";
import { tableStyles } from "./tableStyles";

  
export default class Table extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            containerStyle: props.containerStyle == undefined ? {} : props.containerStyle,
            textInputStyle: props.textInputStyle == undefined ? {} : props.textInputStyle,
            tableStyle: props.tableStyle == undefined ? {} : props.tableStyle,
            rowHeaderStyle: props.rowHeaderStyle == undefined ? {} : props.rowHeaderStyle,
            cellHeaderStyle: props.cellHeaderStyle == undefined ? {} : props.cellHeaderStyle,
            emptyTextStyle: props.emptyTextStyle == undefined ? {} : props.emptyTextStyle,
            rowStyle: props.rowStyle == undefined ? {} : props.rowStyle,
            cellStyle: props.cellStyle == undefined ? {} : props.cellStyle,
            
            rowColor1: props.rowColor1 == undefined ? '#079BFF' : props.rowColor1,
            rowColor2: props.rowColor2 == undefined ? '#97D5FF' : props.rowColor2,
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
                array.push(option);
            })
            this.setState({
                datasAux: array,
            });
        }
    }

    searchCoincidences(texto) {
        if(this.state.datas[0] != undefined){
            var array = [];
            this.state.datas.map((option,index) => {                                                   
                cont = 0;
                option.map((op,ind) => {
                    if(op.props.children != undefined)
                        if(op.props.children.toLowerCase().includes(texto.toLowerCase()) && cont == 0){//ESTO PUEDE CAMBIAR CONFORME A LA SITUACION
                            array.push(option);
                            cont++;
                        }
                })
            })
            this.setState({
                text: texto,
                datasAux: array,
            });
        }
    }

    render(){
        const state = this.state;
        return(
            <View style={[tableStyles.container,state.containerStyle]}>
                <TextInput style={[tableStyles.textInput,state.textInputStyle]} placeholder='Buscar...' placeholderTextColor={state.placeHolderColor} value={state.text} onChangeText={(text) => this.searchCoincidences(text)} />
                <ScrollView horizontal={true}>
                    <ScrollView>
                        <View style={[tableStyles.table,state.tableStyle]}>
                            <View style={[tableStyles.rowHeader,state.rowHeaderStyle]}>
                                {
                                    this.state.datasHeader[0] != undefined ?
                                    state.datasHeader.map((cell, index) => (
                                        <View key={"H"+index} style={[tableStyles.cellHeader,state.cellHeaderStyle]}>{cell}</View>
                                    ))
                                    :
                                    <Text key="N1" style={[tableStyles.emptyText,state.emptyTextStyle]}>NO HAY DATOS</Text>
                                }
                            </View>
                            {
                                this.state.datasAux[0] != undefined ?
                                state.datasAux.map((row, index) => (
                                    <View key={"R"+index} style={[tableStyles.row,state.rowStyle, index%2 == 0 ? {backgroundColor: state.rowColor1} : {backgroundColor: state.rowColor2}]}>
                                        {
                                            row[0] != undefined ?
                                            row.map((cell, ind) => (
                                                <View key={"C"+ind} style={[tableStyles.cell,state.cellStyle]}>{cell}</View>
                                            )) 
                                            :
                                            <Text key="N2" style={[tableStyles.emptyText,state.emptyTextStyle]}>NO HAY DATOS</Text>
                                        }
                                    </View>
                                )) 
                                :
                                <Text key="N2" style={[tableStyles.emptyText,state.emptyTextStyle]}>NO HAY DATOS</Text>
                            }
                        </View>
                    </ScrollView>
                </ScrollView>
            </View>
        )
    }

};