import React from 'react';
import { View, ImageBackground, StatusBar, Image, TouchableOpacity, Text, TouchableHighlight, TextInput} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { loginStyles } from "./loginStyles";
import TextBox from '../textBox/textBox';
import Button from '../button/button';
import Example from '../../screens/example';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Menu } from "./menu";

const Drawer = createDrawerNavigator();
  
export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            statusBarColor: props.statusBarColor == undefined ? "#BAE8F7" : props.statusBarColor,
            logoBool: props.logoBool == undefined ? false : true,
            user: "",
            password: "",
            outcome: "",
            confirmPassword: "",

            screen: 'inicio',
            name: "",
            lastName: "",
        };
    }
    
    login(){
        var idUsuario = "0",
        nombreUsuario = "0",
        correoUsuario = "0",
        sucursal = "0",
        idSucursal = "0",
        outcome = "nulo";  
        /*fetch('http://38.242.246.219/credifacilfinanciera.com/credifacil/credifacil2/movil/inicio.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                accion: 'datosValores',
                correo: this.state.usuario,//'carlos.striffe@gmail.com',
                contrasena: this.state.contrasena,//'C91888054',
            }),
            }).then((respuesta) => respuesta.json())
            .then((respuestajson) => {
                respuestajson.map((dato) => {
                        idUsuario = dato.idDistribuidor;
                        nombreUsuario = dato.nombreDistribuidor;
                        correoUsuario = dato.correo;
                        sucursal = dato.sucursal;
                        idSucursal = dato.idSucursal;
                        outcome = dato.respuesta;
                });
                if(respuesta == "exito"){
                    this.setState({
                        pantalla: 'pantallas',
                        idUsuario: idUsuario,
                        nombreUsuario: nombreUsuario,
                        correoUsuario: correoUsuario,
                        sucursal: sucursal,
                        idSucursal: idSucursal,
                        outcome: outcome,
                    });
                }
                this.setState({
                    outcome: outcome,
                });
            })
            .catch((error) => {
                console.error(error);
            });    */         
            
            this.setState({
                screen: 'pantallas',  
            });          
    }

    resetPassword(){
        if(this.state.usuario == "")
            alert("Por favor ingresa un correo");
        else if(this.state.nueva == "")
            alert("Por favor ingresa una contraseña");
        else if(this.state.confirma == "")
            alert("Por favor confirma la contraseña");
        else if(this.state.nueva != this.state.confirma)
            alert("Las contraseñas no coinciden");
        else            
            /*fetch('http://38.242.246.219/credifacilfinanciera.com/credifacil/credifacil2/movil/inicio.php', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    accion: 'restablecerContrasena',
                    correo: this.state.usuario,
                    nueva: this.state.nueva,
                }),
                }).then((respuesta) => respuesta.json())
                .then((respuestajson) => {
                    if(respuestajson[0].respuesta == "exito"){
                        this.setState({
                            pantalla: 'inicio',
                            outcome: "Se ha enviado un correo para confirmar",
                        });
                        alert("Se ha enviado un correo para confirmar");
                    }
                    else
                        alert(respuestajson[0].respuesta);
                })
                .catch((error) => {
                    console.error(error);
                });*/
                
            this.setState({
                screen: 'inicio',  
            });                           
    }

    newUser(){
        if(this.state.nombre == "")
            alert("Por favor ingresa un nombre");
        else if(this.state.apellidos == "")
            alert("Por favor ingresa un apellido");
        else if(this.state.usuario == "")
            alert("Por favor ingresa un correo");
        else if(!this.state.usuario.includes('@'))
            alert("Por favor ingresa un correo valido");
        else if(!this.state.usuario.includes('.com'))
            alert("Por favor ingresa un correo valido");
        else if(this.state.nueva == "")
            alert("Por favor ingresa una contraseña");
        else if(this.state.confirma == "")
            alert("Por favor confirma la contraseña");
        else if(this.state.nueva != this.state.confirma)
            alert("Las contraseñas no coinciden");
        else/*            
            fetch('http://38.242.246.219/credifacilfinanciera.com/credifacil/credifacil2/movil/inicio.php', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    accion: 'insertar',
                    correo: this.state.usuario,
                    nombre: this.state.nombre,
                    apellidos: this.state.apellidos,
                    contrasena: this.state.nueva,
                }),
                }).then((respuesta) => respuesta.json())
                .then((respuestajson) => {
                    if(respuestajson[0].respuesta == "exito"){
                        this.setState({
                            pantalla: 'inicio',
                            outcome: "Se ha creado un usuario con exito",
                        });
                        alert("Se ha creado un usuario con exito");
                    }
                    else
                        alert(respuestajson[0].respuesta);
                })
                .catch((error) => {
                    console.error(error);
                });   */ 
            this.setState({
                screen: 'inicio',  
            });                      
    }

    closeSession = () =>{
        this.setState({
            pantalla: 'inicio',
            outcome: "",
        });
    }

    componentDidMount(){
        //este sirve para precargar cosas
    }


    render(){
        const state = this.state;
        if(state.screen == 'inicio')
            return(
                <ImageBackground style={loginStyles.mainContainer} source={require('../../assets/fondo.jpg')} >
                    <StatusBar backgroundColor={state.statusBarColor}/>
                    {state.logoBool && <Image style={loginStyles.logo} source={require('../../assets/cs.jpg')} />}
                    <TextBox key='email' type='2' label={false} inputStyle={loginStyles.textBox} placeHolder={"Correo"} value={state.user} onChangeText={(user) => this.setState({user})} autoCapitalize={"none"}/>
                    <TextBox key='password' type='2' label={false} inputStyle={loginStyles.textBox} placeHolder={"Contraseña"} value={state.password} onChangeText={(password) => this.setState({password})} autoCapitalize={"none"} secureTextEntry={true}/>
                    <TouchableOpacity><Text style={loginStyles.link} onPress={() => {this.setState({screen: 'restablecer'})}} maxFontSizeMultiplier={1}>Olvide mi contraseña</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={loginStyles.link} onPress={() => {this.setState({screen: 'crear'})}} maxFontSizeMultiplier={1}>Crear</Text></TouchableOpacity>
                    <Text style={loginStyles.labelWrong} maxFontSizeMultiplier={1}>{state.outcome}</Text>
                    <Button key='loginButton' iconLeft={false} iconRight={false} text={"Iniciar Sesion"} containerStyle={loginStyles.button} textStyle={loginStyles.buttonText} onPress={() => this.login()}/>
                </ImageBackground>
            )
        if(state.screen == 'restablecer')
            return(
                <ImageBackground style={loginStyles.mainContainer} source={require('../../assets/fondo.jpg')} >
                    <StatusBar backgroundColor={state.statusBarColor}/>
                    <TouchableOpacity><Text style={loginStyles.link2} onPress={() => {this.setState({screen: 'inicio'})}}>Volver</Text></TouchableOpacity>
                    <TextBox key='correo' type='2' label={false} inputStyle={loginStyles.textBox} placeHolder={"Correo"} value={state.user} onChangeText={(user) => this.setState({user})} autoCapitalize={"none"}/>
                    <TextBox key='password' type='2' label={false} inputStyle={loginStyles.textBox} placeHolder={"Contraseña"} value={state.password} onChangeText={(password) => this.setState({password})} autoCapitalize={"none"} secureTextEntry={true}/>
                    <TextBox key='confirmPassword' type='2' label={false} inputStyle={loginStyles.textBox} placeHolder={"Contraseña"} value={state.confirmPassword} onChangeText={(confirmPassword) => this.setState({confirmPassword})} autoCapitalize={"none"} secureTextEntry={true}/>
                    <Text style={loginStyles.labelWrong}>{state.outcome}</Text>
                    <Button key='resetButton' iconLeft={false} iconRight={false} text={"Restablecer"} containerStyle={loginStyles.button} textStyle={loginStyles.buttonText} onPress={() => this.resetPassword()}/>
                </ImageBackground>
            )
        if(state.screen == 'crear')
            return(
                <ImageBackground style={loginStyles.mainContainer} source={require('../../assets/fondo.jpg')} >
                    <StatusBar backgroundColor={state.statusBarColor}/>
                    <TouchableOpacity><Text style={loginStyles.link2} onPress={() => {this.setState({screen: 'inicio'})}}>Volver</Text></TouchableOpacity>
                    <TextBox key='name' type='2' label={false} inputStyle={loginStyles.textBox} placeHolder={"Nombre"} value={state.name} onChangeText={(name) => this.setState({name})} />
                    <TextBox key='lastName' type='2' label={false} inputStyle={loginStyles.textBox} placeHolder={"Apellidos"} value={state.lastName} onChangeText={(lastName) => this.setState({lastName})} />
                    <TextBox key='email' type='2' label={false} inputStyle={loginStyles.textBox} placeHolder={"Correo"} value={state.mail} onChangeText={(mail) => this.setState({mail})} />
                    <TextBox key='password' type='2' label={false} inputStyle={loginStyles.textBox} placeHolder={"Contraseña"} value={state.password} onChangeText={(password) => this.setState({password})} />
                    <TextBox key='confirmPassword' type='2' label={false} inputStyle={loginStyles.textBox} placeHolder={"Confirma contraseña"} value={state.confirmPassword} onChangeText={(confirmPassword) => this.setState({confirmPassword})} />
                    <Text style={loginStyles.labelWrong}>{state.outcome}</Text>
                    <Button key='createButton' iconLeft={false} iconRight={false} text={"Nuevo usuario"} containerStyle={loginStyles.button} textStyle={loginStyles.buttonText} onPress={() => this.newUser()}/>
                </ImageBackground>
            )
        if(state.screen == 'pantallas')
            return(
                <View style={{backgroundColor: 'red',width: '100%',height: 550}}>
                    <NavigationContainer>
                        <StatusBar backgroundColor={state.statusBarColor}/>
                        {
                        <Drawer.Navigator drawerContent={props => <Menu closeSesion={this.closeSession.bind(this)} {... props} idUsuario={"1"} nombreUsuario={"nombre"} correoUsuario={"correo"} sucursal={"suc"}/>} initialRouteName="Ejemplo" screenOptions={{drawerStyle: loginStyles.menu}}>
                            <Drawer.Screen initialParams={{idUsuario: "hola", contador: 1}} name="Ejemplo" component={Example} options={({ navigation }) => ({headerTransparent: true,headerTintColor: '#fff',headerTitle: (props) => <View style={loginStyles.menuTitleContainer}><Icon name="home" size={48} color="red" style={loginStyles.menuIconContainer}/></View>,headerLeft: props => <TouchableOpacity onPress={navigation.toggleDrawer}><Icon name="bars" size={48} color="grey" style={loginStyles.drawerIconTitle}/></TouchableOpacity>})} />
                        </Drawer.Navigator>
                        }
                    </NavigationContainer>
                </View>
            )
    }

};