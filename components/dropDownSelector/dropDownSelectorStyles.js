import { StyleSheet, Dimensions } from 'react-native';

export const dropDownSelectorStyles = StyleSheet.create({
    scrollView:{        
        width: 250, 
    },
    container:{
        margin: 5,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        gap: 5,
        backgroundColor: 'white',
    },
    textInput:{
        height: 60,
        width: '95%',
        borderWidth: 1,
        borderRadius: 10,
        textAlign: 'center',
        color: 'black',
        backgroundColor: 'white',
    },
    button:{
        flexDirection: 'row',
        width: '95%',
        height: 60,
        borderRadius: 5,
        borderWidth: 1,
        alignItems: 'center',
        gap: 2
    },
    buttonText:{
        fontSize: 10,
        flex: 6,
        textAlign: 'center',
    },
    buttonIcon:{
        flex: 1,
        textAlign: 'center',
    },
    option:{
        height: 50,
        width: '95%',
        borderRadius: 5,
        borderWidth: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    optionText:{
        fontSize: 10,
    },
    optionEmpty:{
        height: 50,
        width: '95%',
        borderRadius: 5,
        borderWidth: 1,
        alignItems: 'center',
        backgroundColor: 'lightgrey',
        justifyContent: 'center',
    },
});