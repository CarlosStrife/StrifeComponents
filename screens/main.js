import React from 'react';
import { ScrollView, Text, View,} from "react-native";
import { mainStyles } from "../styles/main";
import TextBox from '../components/textBox/textBox';
import Button from '../components/button/button';
import DateInput from '../components/dateInput/dateInput';
import DropDownSelector from '../components/dropDownSelector/dropDownSelector';
import Table from '../components/table/table';
import Switch from '../components/switch/switch';
import Radio from '../components/radio/radio';
import ProgressBar from '../components/progressBar/progressBar';
import LinearGradient from 'react-native-linear-gradient';

  
export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pantalla: 'main',
            cajaTexto: '',
            date: '',
            option: 'nada',
            value: true,
        };
    }
    
    cambiarPantalla(pantalla){
        this.setState({
            pantalla: pantalla
        });
    }
    onChangeDate(cambio){
        this.setState({date: cambio});
    }
    
    onChangeOption(option){
        this.setState({option: option});
    }
    
    alerta(){
        alert("este es mi boton");
    }

    onOff(option){
        this.setState({value: option});
    }

    pressed(option){
        this.setState({value: option});
    }

    render(){
        const state = this.state;
            if(state.pantalla == 'main')
                return(
                    <ScrollView style={[mainStyles.mainContainer,{backgroundColor: '#3C1642'}]} contentContainerStyle={{alignItems: 'center'}}>
                        <Text style={{color: "white", fontSize: 30, fontWeight: 'bold', marginTop: 20}}>STRIFE COMPONENTS</Text>
                        <LinearGradient colors={['#086375','#1dd3b0', '#AFFC41', '#B2FF9E']} style={{borderWidth: 1,borderBottomWidth: 10,borderLeftWidth: 10,marginTop:20,width: 300,alignItems: 'center',justifyContent:'center'}}>
                            <Button onPress={() => this.cambiarPantalla("textBox")} text='CAJA DE TEXTO'  containerStyle={{backgroundColor: 'green'}} textStyle={{color: 'white'}}/>
                            <Button onPress={() => this.cambiarPantalla("button")} text='BOTON'  containerStyle={{backgroundColor: 'yellow'}} textStyle={{color: 'black'}}/>
                            <Button onPress={() => this.cambiarPantalla("dateInput")} text='SELECTOR DE FECHA'  containerStyle={{backgroundColor: 'blue'}} textStyle={{color: 'white'}}/>
                            <Button onPress={() => this.cambiarPantalla("dropDownSelector")} text='SELECTOR'  containerStyle={{backgroundColor: 'red'}} textStyle={{color: 'white'}}/>
                            <Button onPress={() => this.cambiarPantalla("table")} text='TABLA'  containerStyle={{backgroundColor: 'orange'}} textStyle={{color: 'white'}}/>
                            <Button onPress={() => this.cambiarPantalla("switch")} text='SWITCH'  containerStyle={{backgroundColor: 'cyan'}} textStyle={{color: 'black'}}/>
                            <Button onPress={() => this.cambiarPantalla("radio")} text='RADIOS'  containerStyle={{backgroundColor: 'purple'}} textStyle={{color: 'white'}}/>
                            <Button onPress={() => this.cambiarPantalla("progressBar")} text='BARRA PROGRESIVA'  containerStyle={{backgroundColor: 'brown'}} textStyle={{color: 'white'}}/>
                        </LinearGradient>
                        
                    </ScrollView>
                )
            else if(state.pantalla == 'textBox')
                return(
                    <ScrollView style={[mainStyles.mainContainer,{backgroundColor: '#3C1642'}]} contentContainerStyle={{alignItems: 'center'}}>
                        <View>
                            <Button onPress={() => this.cambiarPantalla("main")} iconLeft={true} leftColor='black' leftSize={22} leftSymbol='reply-all' containerStyle={{backgroundColor: 'white',borderWidth:1}} />
                        </View>
                        <Text style={{color: 'black'}}>{state.value.toString()}</Text>
                        <TextBox onChangeText={(cajaTexto) => this.setState({cajaTexto})} type='1' label={true} labelText='etiq' containerStyle={{backgroundColor: 'white'}} labelStyle={{backgroundColor: 'white'}} inputStyle={{backgroundColor: 'white'}} placeHolder='Hola'/>
                        <TextBox type='2' label={true}/>
                        <TextBox type='3' label={true}/>
                    </ScrollView>
                )
            else if(state.pantalla == 'button')
                return(
                    <ScrollView style={[mainStyles.mainContainer,{backgroundColor: '#3C1642'}]} contentContainerStyle={{alignItems: 'center'}}>
                        <Text style={{color: 'black'}}>{state.value.toString()}</Text>
                        <View>
                            <Button onPress={() => this.cambiarPantalla("main")} iconLeft={true} leftColor='black' leftSize={22} leftSymbol='reply-all' containerStyle={{backgroundColor: 'white',borderWidth:1}} />
                            <Button onPress={() => this.alerta()} iconLeft={true} iconRight={true} text='PRUEBA' rightColor='red' leftColor='yellow' leftSize={22}  rightSize={30} rightSymbol='grin-tongue' leftSymbol='hamsa' containerStyle={{backgroundColor: 'black'}} textStyle={{color: 'blue'}}/>
                        </View>
                    </ScrollView>
                )
            else if(state.pantalla == 'dateInput')
                return(
                    <ScrollView style={[mainStyles.mainContainer,{backgroundColor: '#3C1642'}]} contentContainerStyle={{alignItems: 'center'}}>
                        <View>
                            <Button onPress={() => this.cambiarPantalla("main")} iconLeft={true} leftColor='black' leftSize={22} leftSymbol='reply-all' containerStyle={{backgroundColor: 'white',borderWidth:1}} />
                        </View>
                        <Text style={{color: 'black'}}>{state.value.toString()}</Text>
                        <DateInput closeColor='purple' okColor='purple' onChangeDate={this.onChangeDate.bind(this)} />
                    </ScrollView>
                )
            else if(state.pantalla == 'dropDownSelector')
                return(
                    <ScrollView style={[mainStyles.mainContainer,{backgroundColor: '#3C1642'}]} contentContainerStyle={{alignItems: 'center'}}>
                        <View>
                            <Button onPress={() => this.cambiarPantalla("main")} iconLeft={true} leftColor='black' leftSize={22} leftSymbol='reply-all' containerStyle={{backgroundColor: 'white',borderWidth:1}} />
                        </View>
                        <Text style={{color: 'black'}}>{state.value.toString()}</Text>
                        <DropDownSelector onChangeOption={this.onChangeOption.bind(this)} datas={[1,2,5,8]}/>
                    </ScrollView>
                )
            else if(state.pantalla == 'table')
                return(
                    <ScrollView style={[mainStyles.mainContainer,{backgroundColor: '#3C1642'}]} contentContainerStyle={{alignItems: 'center'}}>
                        <View>
                            <Button onPress={() => this.cambiarPantalla("main")} iconLeft={true} leftColor='black' leftSize={22} leftSymbol='reply-all' containerStyle={{backgroundColor: 'white',borderWidth:1}} />
                        </View>
                        <Table datasHeader={[<Text style={{color:'black'}}>HOLA</Text>,<Text style={{color:'black'}}>ESTA</Text>,<Text style={{color:'black'}}>ES</Text>,<Text style={{color:'black'}}>UNA</Text>,<Text style={{color:'black'}}>PRUEBA</Text>]}
                            datas={[[<Text style={{color:'black'}}>1</Text>,<Text style={{color:'black'}}>2</Text>,<Text style={{color:'black'}}>3</Text>,<Text style={{color:'black'}}>4</Text>,<Text style={{color:'black'}}>5</Text>]
                            ,[<Text style={{color:'black'}}>6</Text>,<Text style={{color:'black'}}>7</Text>,<Text style={{color:'black'}}>8</Text>,<Text style={{color:'black'}}>9</Text>,<Text style={{color:'black'}}>10</Text>]]}
                        />
                    </ScrollView>
                )
            else if(state.pantalla == 'switch')
                return(
                    <ScrollView style={[mainStyles.mainContainer,{backgroundColor: '#3C1642'}]} contentContainerStyle={{alignItems: 'center'}}>
                        <View>
                            <Button onPress={() => this.cambiarPantalla("main")} iconLeft={true} leftColor='black' leftSize={22} leftSymbol='reply-all' containerStyle={{backgroundColor: 'white',borderWidth:1}} />
                        </View>
                        <Text style={{color: 'black'}}>{state.value.toString()}</Text>
                        <Switch onOff={this.onOff.bind(this)} />
                    </ScrollView>
                )
            else if(state.pantalla == 'radio')
                return(
                    <ScrollView style={[mainStyles.mainContainer,{backgroundColor: '#3C1642'}]} contentContainerStyle={{alignItems: 'center'}}>
                        <View>
                            <Button onPress={() => this.cambiarPantalla("main")} iconLeft={true} leftColor='black' leftSize={22} leftSymbol='reply-all' containerStyle={{backgroundColor: 'white',borderWidth:1}} />
                        </View>
                        <Text style={{color: 'black'}}>{state.value.toString()}</Text>
                        <Radio  pressed={this.pressed.bind(this)} radios={['1','carlos','hey']}/>
                    </ScrollView>
                )
            else if(state.pantalla == 'progressBar')
                return(
                    <ScrollView style={[mainStyles.mainContainer,{backgroundColor: '#3C1642'}]} contentContainerStyle={{alignItems: 'center'}}>
                        <View>
                            <Button onPress={() => this.cambiarPantalla("main")} iconLeft={true} leftColor='black' leftSize={22} leftSymbol='reply-all' containerStyle={{backgroundColor: 'white',borderWidth:1}} />
                        </View>
                        <ProgressBar />
                    </ScrollView>
                )
    }

};