import React from "react";
import { View, Text } from "react-native";

export default class Tabla extends React.Component{
    render(){
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#222831', }}>
                <Text>TABLA</Text>
            </View>
        );
    }
}