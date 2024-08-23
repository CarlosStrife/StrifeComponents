import React from 'react';
import { Text, View,} from "react-native";
import { mainStyles } from "../styles/main";
import TextBox from '../components/textBox/textBox';
import Button from '../components/button/button';
import DateInput from '../components/dateInput/dateInput';
import DropDownSelector from '../components/dropDownSelector/dropDownSelector';

  
export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pantalla: 'main',
            cajaTexto: '',
            date: '',
        };
    }
    
    onChangeDate(cambio){
        this.setState({date: cambio});
    }
    
    alerta(){
        alert("ee");
    }

    render(){
        const state = this.state;
            if(state.pantalla == 'main')
            return(
                <View style={mainStyles.mainContainer}>
                    {/*<Text>{state.cajaTexto}</Text>
                    <TextBox onChangeText={(cajaTexto) => this.setState({cajaTexto})} type='1' label={true} labelText='etiq' containerStyle={{backgroundColor: 'white'}} labelStyle={{backgroundColor: 'white'}} inputStyle={{backgroundColor: 'white'}} placeHolder='Hola'/>
                    <TextBox type='2' label={true}/>
                    <TextBox type='3' label={true}/>
                    <Button onPress={() => this.alerta()} iconLeft={true} iconRight={true} text='enviar' rightColor='red' leftColor='yellow' leftSize={22}  rightSize={30} rightSymbol='grin-tongue' leftSymbol='hamsa' containerStyle={{backgroundColor: 'black'}} textStyle={{color: 'blue'}}/>
                    {/*<DateInput closeColor='purple' okColor='orange' onChangeDate={this.onChangeDate.bind(this)}/>*/}
                    <DropDownSelector />
                </View>
            )
    }

};