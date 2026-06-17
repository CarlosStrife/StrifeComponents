import { StyleSheet, Dimensions } from 'react-native';

export const deleteAccountStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },
    label: {
        marginTop: Math.round(Dimensions.get('window').height)*.05,
        color: '#088395',
        fontSize: Math.round(Dimensions.get('window').height)*.03,
    },
    button:{
        marginTop: Math.round(Dimensions.get('window').height)*.02,
        backgroundColor: 'red',
        borderRadius: 10, 
        height: Math.round(Dimensions.get('window').height)*.07,
        width: Math.round(Dimensions.get('window').width)*.60,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText:{
        color: 'white', 
        fontSize: 20
    },
});