import { StyleSheet, Dimensions, Platform} from 'react-native';

export const mainStyles = StyleSheet.create({
    mainContainer: {
        width: Math.round(Dimensions.get('window').width),
    },
    container1:{
        borderWidth: 1,
        borderBottomWidth: 10,
        borderLeftWidth: 10,
        marginTop:20,
        width: 300,
        alignItems: 'center',
        justifyContent:'center'
    },
    container2:{
        borderWidth: 1,
        borderBottomWidth: 10,
        borderLeftWidth: 10,
        marginTop:20,
        width: 350,
        alignItems: 'center',
        justifyContent:'center'
    },
    title:{
        color: "white", 
        fontSize: 30, 
        fontWeight: 'bold', 
        marginTop: 20
    }
});