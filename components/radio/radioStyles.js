import { StyleSheet, Dimensions } from 'react-native';

export const radioStyles = StyleSheet.create({
    container:{
        margin: 5,
        height: 250,
        width: 320,
        borderWidth: 1,
    },
    ballContainer:{
        width: 130, 
        height: 70,
        borderRadius: 100,
        backgroundColor: 'lightgrey',
    },
    ball:{
        height: 60,
        width: 60,
        borderRadius: 100,
        position: 'absolute',
        top: 5,
        left: 5,
    },
    empty:{
        alignContent: 'center',
        justifyContent: 'center',
    },
    emptyText:{
        color: 'lightgrey'
    },
    radioContainer:{
        position: 'absolute', 
        alignItems: 'center', 
        width: 130
    },
    radioText:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    }
});