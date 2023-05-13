import 'react-native-gesture-handler';
import React from "react";
import { Button, View, } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Alerta from './alerta';
import Boton from './boton';
import Contenedor from './contenedor';
import Etiqueta from './etiqueta';
import Icono from './icono';
import Input from './input';
import Modal from './modal';
import Radio from './radio';
import Imagen from './imagen';
import Selector from './selector';
import Switch from './switch';
import Tabla from './tabla';
import Tabs from './tabs';
import Tarjeta from './tarjeta';
import Video from './video';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
export default class Inicio extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pantalla: 'inicio',
        };
    }
    
    cambiarpantalla = () =>{
        this.setState({pantalla: 'inicio'});
    }

    render(){
        if(this.state.pantalla == 'inicio')
        return(
            <View>
                <Button onPress={() => this.setState({pantalla: 'pantallas',})} title="Iniciar Sesion"/>               
            </View>
        )
        if(this.state.pantalla == 'pantallas')
        return(
            <NavigationContainer>
                {
                    <Drawer.Navigator initialRouteName="Contenedor">
                        <Drawer.Screen name="Alerta" component={Alerta} />
                        <Drawer.Screen name="Boton" component={Boton} />
                        <Drawer.Screen name="Contenedor" component={Contenedor} />
                        <Drawer.Screen name="Etiqueta" component={Etiqueta} />
                        <Drawer.Screen name="Icono" component={Icono} />
                        <Drawer.Screen name="Imagen" component={Imagen} />
                        <Drawer.Screen name="Input" component={Input} />
                        <Drawer.Screen name="Modal" component={Modal} />
                        <Drawer.Screen name="Radio" component={Radio} />
                        <Drawer.Screen name="Selector" component={Selector} />
                        <Drawer.Screen name="Switch" component={Switch} />
                        <Drawer.Screen name="Tabla" component={Tabla} />
                        <Drawer.Screen name="Tabs" component={Tabs} />
                        <Drawer.Screen name="Tarjeta" component={Tarjeta} />
                        <Drawer.Screen name="Video" component={Video} />
                    </Drawer.Navigator>
                }
            </NavigationContainer>
        )
    }

};