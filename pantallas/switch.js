import React from "react";
import { View, Text } from "react-native";

export default class Switch extends React.Component{
    render(){
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#222831', }}>
                <Text>SWITCH</Text>
            </View>
        );
    }
}