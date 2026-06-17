import React from "react";
import { View, Text, ScrollView,} from "react-native";

export default class Example extends React.Component{
    constructor(props){
        super(props);
            this.state = {
                idUsuario: this.props.route.params.idUsuario,
                cargando: true,
            };
        }

    componentDidMount(){             
    }

    componentDidUpdate(prevProps) {
        if(this.props.route.params.contador == 1){
        }
        this.props.route.params.contador++;
    }
    render(){
        const state = this.state;
        return(
            <View style={{padding: 100}}>
                <ScrollView>
                    <Text maxFontSizeMultiplier={1}>ESTA ES UNA PANTALLA DE EJEMPLO</Text>                        
                </ScrollView>
            </View>
        );
    }
}