import { StyleSheet, Dimensions } from 'react-native';

export const buttonStyles = StyleSheet.create({
    container:{
        width: 250, 
        height: 70,
        margin: 5,
        padding: 5,
        backgroundColor: 'rgb(20, 169, 255)',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    text:{
        color: 'black',
        fontSize: 18,
        marginLeft: 8,
        marginRight: 8,
        flex: 3,
        textAlign: 'center'
    },
    rightIconContainer: {
        alignItems: 'center',
        flex: 1
    },
    rightIcon:{
    },
    leftIconContainer: {
        alignItems: 'center',
        flex: 1,
    },
    leftIcon:{
    },
});