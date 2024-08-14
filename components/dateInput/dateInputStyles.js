import { StyleSheet, Dimensions } from 'react-native';

export const dateInputStyles = StyleSheet.create({
    container:{
        width: 250, 
        height: 70,
        margin: 5,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput:{
        flex: 3,
        borderWidth: 1,
        textAlign: 'center',
        height: '95%',
        marginRight: 2,
        fontSize: 14,
        color: 'black',
    },
    button:{
        flex:1,
        backgroundColor: 'rgb(20, 169, 255)',
        borderRadius: 10,
        height: '95%',
        alignItems: 'center'
    },
    icon:{
        margin: 2
    },
    modalContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalBackground:{
        backgroundColor: 'white',
        alignItems: 'center',
        height: 300,
        borderWidth: 1,
        borderRadius: 10
    },
    dateContainer:{
        flex: 2,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonsContainer:{
        flex: 1,
        flexDirection: 'row',
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 100,
    },
    closeButton:{
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 4,
        borderColor: 'rgb(255, 66, 66)',
    },
    okButton:{
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 4,
        borderColor: 'rgb(0, 209, 63)',
    },
    modalIcon:{
        margin: 5
    },
});