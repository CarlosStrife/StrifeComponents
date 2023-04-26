import React from "react";
import { View, Text } from "react-native";

export default class Modal extends React.Component{
    render(){
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#222831', }}>
                <Text>MODAL</Text>
            </View>
        );
    }
}