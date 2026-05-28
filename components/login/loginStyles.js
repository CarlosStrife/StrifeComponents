import { StyleSheet, Dimensions } from 'react-native';

export const loginStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },
    logo: {
        width: Math.round(Dimensions.get('window').width),
        height: Math.round(Dimensions.get('window').height)*.25,
        resizeMode: 'contain',
    },
    textBox: {
        backgroundColor: 'white',
        width: Math.round(Dimensions.get('window').width)*.70,
        height: Math.round(Dimensions.get('window').height)*.07,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        borderTopColor: '#1B98BC',
        borderRightColor: '#088395',
        borderLeftColor: '#1B98BC',
        borderBottomColor: '#088395',
        borderBottomWidth: 3,
        borderTopWidth: 0.5,
        borderRightWidth: 3,
        borderLeftWidth: 0.5,
        color: 'black',
        textAlign: 'center',
        fontSize: 20
    },
    label: {
        marginTop: Math.round(Dimensions.get('window').height)*.05,
        color: '#088395',
        fontSize: Math.round(Dimensions.get('window').height)*.03,
    },
    label2: {
        marginTop: Math.round(Dimensions.get('window').height)*.02,
        color: '#088395',
        fontSize: Math.round(Dimensions.get('window').height)*.03,
    },
    labelWrong: {
        marginTop: Math.round(Dimensions.get('window').height)*.02,
        color: 'red',
        fontSize: Math.round(Dimensions.get('window').height)*.03,
        textAlign: 'center',
    },
    link:{
        marginTop: Math.round(Dimensions.get('window').height)*.02,
        color: 'white',
        fontSize: 20,
        textDecorationLine: 'underline',
    },
    link2:{
        marginTop: Math.round(Dimensions.get('window').height)*.02,
        color: 'black',
        fontSize: 20,
        textDecorationLine: 'underline',
    },
    button:{
        marginTop: Math.round(Dimensions.get('window').height)*.02,
        backgroundColor: '#0E4892',
        borderRadius: 10, 
        height: Math.round(Dimensions.get('window').height)*.07,
        width: Math.round(Dimensions.get('window').width)*.5,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText:{
        color: 'white', 
        fontSize: 20
    },
    menu:{
        backgroundColor: 'black',
        width: Math.round(Dimensions.get('window').width)*.70,
    },
    menuTitleContainer: {
        width: Math.round(Dimensions.get('window').height*.332),
    },
    menuIconContainer:{
        alignSelf: Platform.OS === 'ios' ? 'auto' : 'center',
        marginLeft: Platform.OS === 'ios' ? Math.round(Dimensions.get('window').width)*.25 : 0
    },
    drawerIconTitle:{
        marginLeft: 10
    },
    menuTitle: {
        alignSelf: 'center', 
        fontSize: 25, 
        fontWeight: 'bold',
        color: 'white'
    },
});