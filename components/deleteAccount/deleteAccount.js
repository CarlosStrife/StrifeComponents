import React from 'react';
import { View, StatusBar,} from "react-native";
import { deleteAccountStyles } from "./deleteAccountStyles";
import Button from '../button/button';
  
export default class DeleteAccount extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            statusBarColor: props.statusBarColor == undefined ? "red" : props.statusBarColor,
            user: "",
            outcome: "",
        };
    }
    
    delete(){
        //aqui borraremos la cuenta
    }

    componentDidMount(){
        //este sirve para precargar cosas
    }


    render(){
        const state = this.state;
        return(
            <View style={deleteAccountStyles.mainContainer} >
                <StatusBar backgroundColor={state.statusBarColor}/>
                <Button key='deleteButton' iconLeft={false} iconRight={true} rightColor={"white"} rightSize={20} rightSymbol={"trash"} text={"Borrar Cuenta"} containerStyle={deleteAccountStyles.button} textStyle={deleteAccountStyles.buttonText} onPress={() => this.delete()}/>
            </View>
        )
    }

};