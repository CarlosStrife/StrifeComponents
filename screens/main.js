import React from 'react';
import { Text, Image, TextInput, ImageBackground, View, StatusBar, TouchableHighlight, TouchableOpacity} from "react-native";
import { mainStyles } from "../styles/main";
import TextBox from '../components/textBox/textBox';

  
export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pantalla: 'main',
        };
    }
    
    
    render(){
        const state = this.state;
            if(state.pantalla == 'main')
            return(
                <View style={mainStyles.mainContainer}>
                    <TextBox type='1' label={true}/>
                    <TextBox type='2' label={true}/>
                    <TextBox type='3' label={true}/>
                </View>
            )
    }

};