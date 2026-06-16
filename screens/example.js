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
        this.props.route.params.contador++;
    }
    render(){
        const state = this.state;
        return(
            <View>
                <ScrollView>
                    <Text maxFontSizeMultiplier={1}>ESTA ES UNA PANTALLA DE EJEMPLO</Text>                        
                </ScrollView>
            </View>
        );
    }
}