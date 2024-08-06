import { StyleSheet, Dimensions, Platform} from 'react-native';

export const inicioEstilos = StyleSheet.create({
    contenedorPrincipal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    etiqueta: {
        marginTop: Math.round(Dimensions.get('window').height)*.05,
        color: '#088395',
        fontSize: Math.round(Dimensions.get('window').height)*.03,
    },
});