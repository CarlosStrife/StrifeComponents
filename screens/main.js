import React from 'react';
import { ScrollView, Text, View,} from "react-native";
import { mainStyles } from "../styles/main";
import TextBox from '../components/textBox/textBox';
import Button from '../components/button/button';
import DateInput from '../components/dateInput/dateInput';
import DropDownSelector from '../components/dropDownSelector/dropDownSelector';
import Table from '../components/table/table';

  
export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pantalla: 'main',
            cajaTexto: '',
            date: '',
            option: 'nada'
        };
    }
    
    onChangeDate(cambio){
        this.setState({date: cambio});
    }
    
    onChangeOption(option){
        this.setState({option: option});
    }
    
    alerta(){
        alert("ee");
    }

    render(){
        const state = this.state;
            if(state.pantalla == 'main')
            return(
                <ScrollView style={mainStyles.mainContainer}>
                    {/*<Text>{state.cajaTexto}</Text>
                    <TextBox onChangeText={(cajaTexto) => this.setState({cajaTexto})} type='1' label={true} labelText='etiq' containerStyle={{backgroundColor: 'white'}} labelStyle={{backgroundColor: 'white'}} inputStyle={{backgroundColor: 'white'}} placeHolder='Hola'/>
                    <TextBox type='2' label={true}/>
                    <TextBox type='3' label={true}/>
                    <Button onPress={() => this.alerta()} iconLeft={true} iconRight={true} text='enviar' rightColor='red' leftColor='yellow' leftSize={22}  rightSize={30} rightSymbol='grin-tongue' leftSymbol='hamsa' containerStyle={{backgroundColor: 'black'}} textStyle={{color: 'blue'}}/>
                    <DateInput closeColor='purple' okColor='purple' onChangeDate={this.onChangeDate.bind(this)} />
                    <DropDownSelector onChangeOption={this.onChangeOption.bind(this)} datas={[1,2,5,8]}/>*/}
                    <Table datasHeader={[<Text>HOLA</Text>,<Text>ESTA</Text>,<Text>ES</Text>,<Text>UNA</Text>,<Text>PRUEBA</Text>,<Button onPress={() => this.alerta()} iconLeft={true} iconRight={true} text='enviar' rightColor='red' leftColor='yellow' leftSize={22}  rightSize={30} rightSymbol='grin-tongue' leftSymbol='hamsa' containerStyle={{backgroundColor: 'black'}} textStyle={{color: 'blue'}}/>]}/>
                </ScrollView>
            )
    }

};