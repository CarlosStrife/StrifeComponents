import { StyleSheet, Dimensions } from 'react-native';

export const progressBarStyles = StyleSheet.create({
    container:{
        width: 130, 
        height: 70,
        margin: 5,
        padding: 5,
        borderWidth: 1,
    },
    barRow:{
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
    },
    bar:{
        flex: 0,
        backgroundColor: 'red'
    },
    bar2:{
        flex: 0,
        backgroundColor: 'blue'
    }
});