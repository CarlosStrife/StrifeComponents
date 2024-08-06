import { StyleSheet, Dimensions } from 'react-native';

export const textBoxStyles = StyleSheet.create({
    cargador:{
        width: Math.round(Dimensions.get('window').width)*.25, 
        height: Math.round(Dimensions.get('window').height)*.1,
        position: "absolute", 
        top: Math.round(Dimensions.get('window').height)*.45,
        left: Math.round(Dimensions.get('window').width)*.38,
        zIndex: 1,
    },
});