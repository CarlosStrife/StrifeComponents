import { StyleSheet, Dimensions } from 'react-native';

export const menuStyles = StyleSheet.create({
    principalContainer: {        
        height: Math.round(Dimensions.get('window').height),
    },
    scroll:{
        paddingTop: 10,
        paddingBottom: 10,
    },
    headerContainer: {    
        paddingTop: 10,    
        height: Math.round(Dimensions.get('window').height)*.35,
        alignItems: 'center',
        gap: 5,
    },
    centralContainer: {
        height: Math.round(Dimensions.get('window').height)*.58,
    },
    footerContainer: {        
        height: Math.round(Dimensions.get('window').height)*.7,
    },
    buttonContainer: {
        paddingLeft: 0,
        alignItems: 'center',
    },
    buttonInteriorContainer: {
        flexDirection: 'row',
        gap: 10,
        height: '100%',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    userImage: {
        width: Math.round(Dimensions.get('window').width*.32),
        height: Math.round(Dimensions.get('window').width*.32),
        backgroundColor: 'blue',
        resizeMode: 'contain',
        borderRadius: 100
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
    menuButton: {
        backgroundColor: "transparent",
        borderBottomWidth: 1,
        borderBottomColor: '#008888',
        height: 55,
    },
    buttonText:{
        fontSize: Dimensions.get('window').fontScale > 1 ? 8 : 16,
        width: '80%',
        fontWeight: '500'
    },
    buttonIcon: {
        
    },
});