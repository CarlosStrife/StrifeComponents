import { StyleSheet, Dimensions } from 'react-native';

export const switchStyles = StyleSheet.create({
    container:{
        width: 130, 
        height: 70,
        margin: 5,
        borderRadius: 100
    },
    ball:{
        height: 60,
        width: 60,
        borderRadius: 100,
        position: 'absolute',
        top: 5,
    }
});