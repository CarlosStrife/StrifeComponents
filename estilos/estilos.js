import { StyleSheet, Dimensions } from 'react-native';

export const inicioestilo = StyleSheet.create({
    contenedorprincipal: {
        flex: 1,
        backgroundColor: '#222831',
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center',
    },
    contenedordegradado: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center',
        width: Math.round(Dimensions.get('window').width),
        height: Math.round(Dimensions.get('window').height),
    },
    contenedorz1: {
        position: 'absolute',
        top:0,
        left:0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: Math.round(Dimensions.get('window').width)*.25,
        borderTopWidth: Math.round(Dimensions.get('window').width)*.25,
        borderBottomWidth: Math.round(Dimensions.get('window').width)*.25,
        borderLeftWidth: Math.round(Dimensions.get('window').width)*.25,
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: '#5f6769', 
        borderTopColor: '#5f6769',   
    },
    contenedorz2: {
        position: 'absolute',
        top:0,
        left:0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: Math.round(Dimensions.get('window').width)*.60,
        borderTopWidth: Math.round(Dimensions.get('window').width)*.60,
        borderBottomWidth: Math.round(Dimensions.get('window').width)*.60,
        borderLeftWidth: Math.round(Dimensions.get('window').width)*.60,
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: '#373D3F', 
        borderTopColor: '#373D3F',
    },
    contenedorz3: {
        position: 'absolute',
        top:0,
        left:0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: Math.round(Dimensions.get('window').width),
        borderTopWidth: Math.round(Dimensions.get('window').width),
        borderBottomWidth: Math.round(Dimensions.get('window').width),
        borderLeftWidth: Math.round(Dimensions.get('window').width),
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: '#272D2F', 
        borderTopColor: '#272D2F',
    },
    contenedorbotondegradado: {
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center',
        marginTop: Math.round(Dimensions.get('window').height)*.05
    },
    logo: {
        marginTop: Math.round(Dimensions.get('window').height)*.05,
        width: Math.round(Dimensions.get('window').width)*.80,
        height: Math.round(Dimensions.get('window').height)*.30,
    },
    cajatexto: {
        backgroundColor: 'transparent',
        width: Math.round(Dimensions.get('window').width)*.60,
        height: Math.round(Dimensions.get('window').height)*.10,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderRightColor: '#b2d430',
        borderBottomColor: '#b2d430',
        borderBottomWidth: 1,
        borderRightWidth: 1,
        color: '#00FBFF',
        textAlign: 'center',
    },
    etiqueta: {
        marginTop: Math.round(Dimensions.get('window').height)*.05,
        color: '#b2d430',
        fontSize: Math.round(Dimensions.get('window').height)*.03,
    },
    etiquetaincorrecta: {
        marginTop: Math.round(Dimensions.get('window').height)*.02,
        color: 'red',
        fontSize: Math.round(Dimensions.get('window').height)*.03,
        display: 'none',
    },
    botonprincipal: {
        backgroundColor: "transparent",
        width: Math.round(Dimensions.get('window').width)*.50,
    },
    
    botondegradado: {
        borderTopLeftRadius: 50,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 50,
    },    
    menudelado: {
        backgroundColor: '#006789',
        width: Math.round(Dimensions.get('window').width*.80),
    },

});


export const appestilo = StyleSheet.create({
    contenedorprincipal: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center',
        width: Math.round(Dimensions.get('window').width),
        height: Math.round(Dimensions.get('window').height),
    }

});

export const menudeladoestilo = StyleSheet.create({
    contenedorprincipal: {
        flex: 1,
        height: Math.round(Dimensions.get('window').height),
    },
    contenedorenmedio: {
        height: Math.round(Dimensions.get('window').height*.68),
    },
    contenedorabajo: {
        justifyContent: 'flex-end',
        height: Math.round(Dimensions.get('window').height*.07),
    },
    contenedorbotondegradado: {
        paddingLeft: 0,
    },
    imagenusuario: {
        width: Math.round(Dimensions.get('window').width*.80),
        height: Math.round(Dimensions.get('window').height*.25),
    },
    acordeon: {
        color: '#949E00',
        alignSelf: 'center'
    },
    botonmenu: {
        backgroundColor: "transparent",
        borderBottomWidth: 1,
        borderBottomColor: '#006789',
    },
    botoncerrarsesion: {
        backgroundColor: "#B10020",
    },
    botondegradado: {
    },

});


export const principalesestilo = StyleSheet.create({
    contenedorprincipal: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: '#222831',
        width: Math.round(Dimensions.get('window').width),
        height: Math.round(Dimensions.get('window').height),
    },
    contenedorarriba: {
        justifyContent: 'flex-start',
        backgroundColor: '#006789',
        width: Math.round(Dimensions.get('window').width),
        height: Math.round(Dimensions.get('window').height*.10),
    },
    contenedorabajo: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        width: Math.round(Dimensions.get('window').width),
        height: Math.round(Dimensions.get('window').height*.90),
    },
    botonheadermenu: {
        backgroundColor: 'transparent',
        width: 60,
    },
    titulo: {
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#b2d430',
    },

});

export const colocadoresestilo = StyleSheet.create({
    contenedorprincipal: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: '#222831',
        width: Math.round(Dimensions.get('window').width),
        height: Math.round(Dimensions.get('window').height),
    },
    contenedorarriba: {
        justifyContent: 'flex-start',
        backgroundColor: '#006789',
        width: Math.round(Dimensions.get('window').width),
        height: Math.round(Dimensions.get('window').height*.10),
    },
    contenedorbotones: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        width: Math.round(Dimensions.get('window').width),
        height: Math.round(Dimensions.get('window').height*.15),
    },
    contenedorbuscador1: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        width: Math.round(Dimensions.get('window').width),
        height: Math.round(Dimensions.get('window').height*.15),
    },
    contenedorbuscador2: {
        width: Math.round(Dimensions.get('window').width*.80),
    },
    contenedortabla: {
        width: Math.round(Dimensions.get('window').width*.95),
        height: Math.round(Dimensions.get('window').height*.45),
    },
    contenedorbotoneditar: {
        alignItems: 'center',
    },
    contenedorbotoneliminar: {
        alignItems: 'center',
    },
    contenedorbotonesmodal: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    contenedorbotonesmodal2: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Math.round(Dimensions.get('window').width*.20),
    },
    contenedormodal1: {
        backgroundColor: 'transparent',
    },
    contenedormodal2: {
        backgroundColor: 'transparent',
        alignItems: 'center',
    },
    contenedormodal3: {
        alignItems: 'center',
        justifyContent: 'center',
        height: Math.round(Dimensions.get('window').height),
    },
    contenedormodaldegradado1: {
    },
    contenedormodaldegradado2: {
        alignItems: 'center',
        width: Math.round(Dimensions.get('window').width*.90),
        height: Math.round(Dimensions.get('window').height*.50),
        borderRadius: 10,
        borderWidth: 10,
        borderColor: 'white',
    },
    contenedorselector: {
        backgroundColor: '#0079A6',
        borderColor: '#00A9E7',
        borderWidth: 1,
        borderRadius: 10,
    },
    contenedorcalendario: {
        flexDirection: 'row',
        alignItems: 'center',
        height: Math.round(Dimensions.get('window').height*.10),
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#b2d430',
    },
    titulomodal: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#b2d430',
    },
    subtitulo: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#b2d430',
    },
    textomodal: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'cyan',
    },
    etiqueta: {
        fontSize: 20,
        textAlign: 'center',
        color: '#b2d430',
    },
    cajatexto: {
        textAlign: 'center',
        backgroundColor: '#0079A6',
        color: 'cyan',
        borderColor: '#00A9E7',
        borderWidth: 1,
        width: Math.round(Dimensions.get('window').width*.70),
        borderRadius: 10,
        height: Math.round(Dimensions.get('window').height*.06),
    },
    cajacalendario: {
        textAlign: 'center',
        backgroundColor: '#0079A6',
        color: 'cyan',
        borderColor: '#00A9E7',
        borderWidth: 1,
        width: Math.round(Dimensions.get('window').width*.50),
        borderRadius: 10,
        height: Math.round(Dimensions.get('window').height*.06),
    },
    buscador: {
        backgroundColor: '#E1E1E1',
    },
    cabeceratabla: { 
        height: 50, 
    },
    cabeceratablatexto: { 
        textAlign: 'center', 
        fontWeight: 'bold',
        color: '#008ABD', 
        fontSize: 20,
    },
    renglon1: { 
        backgroundColor: '#002C3D44',
    },
    renglon2: { 
        backgroundColor: '#89898944',
    },
    renglontexto: { 
        textAlign: 'center',
        color: '#b2d430', 
        fontSize: 16,
    },
    selector: {
        color: 'cyan',
        width: Math.round(Dimensions.get('window').width*.70),
        height: Math.round(Dimensions.get('window').height*.06),
    },
    botonheadermenu: {
        backgroundColor: 'transparent',
        width: 60,
    },
    botondegradadonuevo: {
        borderRadius: 10,
        width: Math.round(Dimensions.get('window').width*.50),
    },
    botondegradadoeditar: {
        borderRadius: 10,
        width: Math.round(Dimensions.get('window').width*.20),
    },
    botondegradadoeliminar: {
        borderRadius: 10,
        width: Math.round(Dimensions.get('window').width*.20),
    },
    botondegradadocerrar: {
        borderRadius: 10,
        width: Math.round(Dimensions.get('window').width*.18),
    },
    botondegradadoguardar: {
        borderRadius: 10,
        width: Math.round(Dimensions.get('window').width*.18),
        marginLeft: Math.round(Dimensions.get('window').width*.30),
    },
    botondegradadocancelar: {
        borderRadius: 10,
        width: Math.round(Dimensions.get('window').width*.40),
    },
    botondegradadoaceptar: {
        borderRadius: 10,
        width: Math.round(Dimensions.get('window').width*.40),
        marginLeft: Math.round(Dimensions.get('window').width*.02),
    },
    botondegradadocalendario: {
        borderRadius: 10,
        width: Math.round(Dimensions.get('window').width*.18),
        marginLeft: Math.round(Dimensions.get('window').width*.01),
    },
    botonnuevo: {
        backgroundColor: 'transparent',
    },
    botoneditar: {
        backgroundColor: 'transparent',
    },
    botoneliminar: {
        backgroundColor: 'transparent',
    },
    botoncerrar:{
        backgroundColor: 'transparent',
    },
    botonguardar:{
        backgroundColor: 'transparent',
    },
    botoncancelar:{
        backgroundColor: 'transparent',
    },
    botonaceptar:{
        backgroundColor: 'transparent',
    },
    botoncalendario:{
        backgroundColor: 'transparent',
    },

});