import { StyleSheet, Dimensions } from 'react-native';

export const windowStyles = StyleSheet.create({
    cargador:{
        width: Math.round(Dimensions.get('window').width)*.25, 
        height: Math.round(Dimensions.get('window').height)*.1,
        position: "absolute", 
        top: Math.round(Dimensions.get('window').height)*.45,
        left: Math.round(Dimensions.get('window').width)*.38,
        zIndex: 1,
    },
    contenedorPrincipal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#222831',
    },
    container:{
        width: Math.round(Dimensions.get('window').width)*.97,
        height: Math.round(Dimensions.get('window').height)*.98,
        backgroundColor:'transparent',
        alignSelf: "center",
        alignItems: "center", 
        justifyContent: "center",
        padding: 2
    },
    backgroundModal:{
        width: Math.round(Dimensions.get('window').width)*.97,
        height: Math.round(Dimensions.get('window').height)*.70,
        padding: 5, 
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 3, 
        borderColor: '#187EFF',
        gap: 20,
    },
    scrollModal:{
        alignItems: 'center',
        gap: 20,
    },
    scroll:{
        alignItems: 'center',
        paddingTop: Math.round(Dimensions.get('window').height)*.15,
        paddingBottom: Math.round(Dimensions.get('window').height)*.1,
        gap: 20,
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
    contenedorTabla:{
        flex: 1,
        borderColor: 'blue',
        borderWidth: 0,
        borderRadius: 10, 
        backgroundColor: 'white'
    },
    cabeceraTabla:{
        borderColor: 'orange',
        borderWidth: 0,
        backgroundColor: '#136AB1',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    textoCabeceraTabla:{
        textAlign: 'center', 
        fontWeight: 'bold', 
        color: 'white', 
        fontSize: 20,
    },
    textoContenidoTabla:{
        textAlign: 'center', 
        color: 'black', 
        fontSize: 16,
    },
    renglon:{
        backgroundColor: '#002C3D44',
    },
    renglon2:{
        backgroundColor: '#89898944',
    },
    boton:{
        backgroundColor: '#0E4892',
        borderRadius: 10, 
        height: Math.round(Dimensions.get('window').height)*.064,
        width: Math.round(Dimensions.get('window').width)*.51,
        justifyContent: "center",
        alignItems: "center"
    },
    botonTexto:{
        color: 'white', 
        fontSize: 20
    },
    boton2:{
        backgroundColor: '#00D68C',
        borderRadius: 10, 
        height: Math.round(Dimensions.get('window').height)*.064,
        width: Math.round(Dimensions.get('window').width)*.44,
        justifyContent: "center",
        alignItems: "center"
    },
    botonTexto2:{
        color: 'white',
        fontSize: 20
    },
    boton3:{
        backgroundColor: 'grey',
        borderRadius: 10, 
        height: Math.round(Dimensions.get('window').height)*.064,
        width: Math.round(Dimensions.get('window').width)*.44,
        justifyContent: "center",
        alignItems: "center"
    },
    botonTexto3:{
        color: 'white',
        fontSize: 20
    },
    cajaTexto: {
        backgroundColor: 'white',
        width: Math.round(Dimensions.get('window').width)*.80,
        height: Math.round(Dimensions.get('window').height)*.07,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        borderTopColor: '#187AF7',
        borderRightColor: '#187AF7',
        borderLeftColor: '#187AF7',
        borderBottomColor: '#187AF7',
        borderBottomWidth: 3,
        borderTopWidth: 0.5,
        borderRightWidth: 3,
        borderLeftWidth: 0.5,
        color: 'black',
        textAlign: 'center',
        fontSize: 18,
    },
    cajaTexto2: {
        backgroundColor: 'white',
        width: Math.round(Dimensions.get('window').width)*.80,
        height: Math.round(Dimensions.get('window').height)*.07,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        borderTopColor: '#0F4B99',
        borderRightColor: '#0F4B99',
        borderLeftColor: '#0F4B99',
        borderBottomColor: '#0F4B99',
        borderBottomWidth: 3,
        borderTopWidth: 0.5,
        borderRightWidth: 3,
        borderLeftWidth: 0.5,
        color: 'black',
        textAlign: 'center',
        fontSize: 18,
    },
    etiqueta: {
        color: '#187EFF',
        fontSize: Math.round(Dimensions.get('window').height)*.03,
    },
    etiqueta2: {
        color: '#187AF7',
        fontSize: Math.round(Dimensions.get('window').height)*.03,
    },
    etiqueta3: {
        color: '#1674EB',
        fontSize: Math.round(Dimensions.get('window').height)*.03,
    },
    etiqueta4: {
        color: '#156CDB',
        fontSize: Math.round(Dimensions.get('window').height)*.03,
    },
    etiqueta5: {
        color: '#1465CC',
        fontSize: Math.round(Dimensions.get('window').height)*.03,
    },
    etiqueta6: {
        color: '#1158B3',
        fontSize: Math.round(Dimensions.get('window').height)*.03,
    },
    etiqueta7: {
        color: '#1052A6',
        fontSize: Math.round(Dimensions.get('window').height)*.03,
    },
    etiqueta8: {
        color: '#0F4B99',
        fontSize: Math.round(Dimensions.get('window').height)*.03,
    },
    contenedorFecha:{
        flexDirection: 'row', 
        alignItems: 'center', 
        height: Math.round(Dimensions.get('window').height*.07), 
        gap: 2
    },
    cajaTextoFecha:{
        textAlign: 'center',
        backgroundColor: 'white',
        color: 'black',
        borderTopColor: '#1465CC',
        borderRightColor: '#1465CC',
        borderLeftColor: '#1465CC',
        borderBottomColor: '#1465CC',
        borderBottomWidth: 3,
        borderTopWidth: 0.5,
        borderRightWidth: 3,
        borderLeftWidth: 0.5,
        width: '72%',
        borderRadius: 10,
        height: '100%',
        fontSize: 18,
    },
    cajaTextoFechaBoton:{
        backgroundColor: '#1465CC',
        height: '100%',
        width: '15%',
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    cajaSelector:{
        width: '72%',
        color:'black',
        height: '100%',
        fontSize: Dimensions.get('window').height < 710 ?  Dimensions.get('window').fontScale > 1 ? 10 : 18 : Dimensions.get('window').fontScale > 1 ? 12 : 23,
    },
    cajaSelectorBuscador:{
        width: Math.round(Dimensions.get('window').width)*.80,
        height: Math.round(Dimensions.get('window').height)*.07,
        alignItems: 'center',
        borderColor: '#187EFF',
        borderTopColor: '#187EFF',
        borderBottomColor: '#187EFF',
        borderBottomWidth: 3,
        borderTopWidth: 0.5,
        borderRightWidth: 3,
        borderLeftWidth: 0.5,
    },
    cajaSelectorBuscador2:{
        width: Math.round(Dimensions.get('window').width)*.80,
        height: Math.round(Dimensions.get('window').height)*.07,
        alignItems: 'center',
        borderColor: '#1674EB',
        borderTopColor: '#1674EB',
        borderBottomColor: '#1674EB',
        borderBottomWidth: 3,
        borderTopWidth: 0.5,
        borderRightWidth: 3,
        borderLeftWidth: 0.5,
    },
    cajaSelectorBuscador3:{
        width: Math.round(Dimensions.get('window').width)*.80,
        height: Math.round(Dimensions.get('window').height)*.07,
        alignItems: 'center',
        borderColor: '#156CDB',
        borderTopColor: '#156CDB',
        borderBottomColor: '#156CDB',
        borderBottomWidth: 3,
        borderTopWidth: 0.5,
        borderRightWidth: 3,
        borderLeftWidth: 0.5,
    },
    cajaSelectorBuscador4:{
        width: Math.round(Dimensions.get('window').width)*.80,
        height: Math.round(Dimensions.get('window').height)*.07,
        alignItems: 'center',
        borderColor: '#1158B3',
        borderTopColor: '#1158B3',
        borderBottomColor: '#1158B3',
        borderBottomWidth: 3,
        borderTopWidth: 0.5,
        borderRightWidth: 3,
        borderLeftWidth: 0.5,
    },
    cajaSelectorBuscador5:{
        width: Math.round(Dimensions.get('window').width)*.80,
        height: Math.round(Dimensions.get('window').height)*.07,
        alignItems: 'center',
        borderColor: '#1052A6',
        borderTopColor: '#1052A6',
        borderBottomColor: '#1052A6',
        borderBottomWidth: 3,
        borderTopWidth: 0.5,
        borderRightWidth: 3,
        borderLeftWidth: 0.5,
    },
    opcion: {
        color:'black',
        fontSize: Dimensions.get('window').fontScale > 1 ? 10 : 20,
    },
    buscador:{
        alignItems:'center'
    },
});