import React from "react";
import { View, Text } from "react-native";

export default class Selector extends React.Component{
    render(){
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#222831', }}>
                <Text>SELECTOR</Text>
            </View>
        );
    }
}