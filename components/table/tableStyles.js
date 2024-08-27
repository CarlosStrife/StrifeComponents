import { StyleSheet, Dimensions } from 'react-native';

export const tableStyles = StyleSheet.create({
    scrollView:{       
    },
    container: {  
        height: 250,
        width: 250,
        borderColor: 'blue',
        borderWidth: 0,
        borderRadius: 10, 
        backgroundColor: 'white'
    },
    textInput:{
        height: 60,
        width: 250,
        borderWidth: 1,
        borderRadius: 10,
        textAlign: 'center',
        color: 'black',
        backgroundColor: 'white',
    },
    table:{
        backgroundColor: 'black',
    },
    rowHeader: {
        flexDirection: 'row',
        backgroundColor: '#BCFF45',
        gap: 5,
        marginBottom: 2
    },
    cellHeader: {
        width: 60,
    },
    headerText:{
        fontSize: 20
    },
    row: {
        flexDirection: 'row',
        backgroundColor: '#079BFF',
        gap: 5,
    },
    row2: {
        flexDirection: 'row',
        backgroundColor: 'lightgrey',
        gap: 5,
    },
    cell: {
        width: 60,
    },
});