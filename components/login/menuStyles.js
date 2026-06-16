import { StyleSheet, Dimensions } from 'react-native';

export const menuStyles = StyleSheet.create({
    contenedorPrincipal: {        
        height: Math.round(Dimensions.get('window').height),
    },
    scroll:{
        paddingTop: 30,
        paddingBottom: 10,
    },
    contenedorCabecera: {    
        paddingTop: 10,    
        height: Math.round(Dimensions.get('window').height)*.35,
        backgroundColor: 'red',
        alignItems: 'center',
        gap: 5,
    },
    contenedorCentral: {
        height: Math.round(Dimensions.get('window').height)*.58,
        backgroundColor: 'yellow'
    },
    contenedorPie: {        
        justifyContent: Dimensions.get('window').height < 710 ? 'flex-start' : 'flex-end',
        height: Math.round(Dimensions.get('window').height)*.7,
        backgroundColor: 'purple'
    },
    contenedorBoton: {
        paddingLeft: 0,
    },
    imagenUsuario: {
        width: Math.round(Dimensions.get('window').width*.30),
        backgroundColor: 'blue',
        height: '30%',
        resizeMode: 'contain',
    },
    numeroUsuario: {
        backgroundColor: '#1B99FF',
        fontWeight: 'bold',
        borderRadius: 4,
        width: 250,
        textAlign: 'center',
        color: 'white',
    },
    nombreUsuario: {
        backgroundColor: '#1674EB',
        fontWeight: 'bold',
        borderRadius: 4,
        width: 250,
        textAlign: 'center',
        color: 'white',
    },
    correoUsuario: {
        backgroundColor: '#1465CC',
        fontWeight: 'bold',
        borderRadius: 4,
        width: 250,
        textAlign: 'center',
        color: 'white',
    },
    sucursal: {
        backgroundColor: '#1052A6',
        fontWeight: 'bold',
        borderRadius: 4,
        width: 250,
        textAlign: 'center',
        color: 'white',
    },
    acordeon: {
        backgroundColor: 'transparent',
        color: 'white',
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
    botonMenu: {
        backgroundColor: "transparent",
        borderBottomWidth: 1,
        borderBottomColor: '#008888',
        height: 55,
    },
    botonTexto:{
        fontSize: Dimensions.get('window').fontScale > 1 ? 8 : 16,
    },
    botonTitulo: {
        fontSize: 48,
    },
    botonCerrarSesion: {
        backgroundColor: "#003A5A",
        height: 50
    },
    botonBorrar:{
        backgroundColor: 'red',
        borderRadius: 5,        
        width: Math.round(Dimensions.get('window').width*.50),
        height: 40,
        alignItems:'center',
        justifyContent: 'center',
    },
    textoBorrar:{
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    contenedorModal:{
        width: Math.round(Dimensions.get('window').width)*.97,
        height: Math.round(Dimensions.get('window').height)*.98,
        backgroundColor:'transparent',
        alignSelf: "center",
        alignItems: "center", 
        justifyContent: "center",
        padding: 2
    },
    fondoModal:{
        width: Math.round(Dimensions.get('window').width)*.97,
        height: Math.round(Dimensions.get('window').height)*.35,
        padding: 5, 
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 3, 
        borderColor: '#187EFF',
        gap: 20,
        justifyContent: 'center'
    },
    cabeceraModal:{
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    contenidoModal:{
        width: '100%',
        backgroundColor: 'white',
        justifyContent: 'center', 
        alignItems: 'center', 
        alignSelf: 'center', 
        gap: 5
    },
    pieModal:{
        width: '100%',
        justifyContent: 'center', 
        alignItems: 'center',
        flexDirection: "row", 
        gap: 5
    },
    tituloModal:{
        color: '#1674EB', 
        fontSize: 35,
        fontWeight: "bold"
    },
    etiquetaModal: {
        color: '#156CDB',
        fontSize: Math.round(Dimensions.get('window').height)*.03,
        textAlign: 'center'
    },
    botonModalBorrar:{
        backgroundColor: 'red',
        borderRadius: 10, 
        height: Math.round(Dimensions.get('window').height)*.064,
        width: Math.round(Dimensions.get('window').width)*.44,
        justifyContent: "center",
        alignItems: "center"
    },
    botonTextoModalBorrar:{
        color: 'white',
        fontSize: 20
    },
    botonModalCerrar:{
        backgroundColor: 'grey',
        borderRadius: 10, 
        height: Math.round(Dimensions.get('window').height)*.064,
        width: Math.round(Dimensions.get('window').width)*.44,
        justifyContent: "center",
        alignItems: "center"
    },
    botonTextoModalCerrar:{
        color: 'white',
        fontSize: 20
    },

});