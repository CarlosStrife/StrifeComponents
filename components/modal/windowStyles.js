import { StyleSheet, Dimensions } from 'react-native';

export const windowStyles = StyleSheet.create({    
    container:{
        width: Math.round(Dimensions.get('window').width)*.97,
        height: Math.round(Dimensions.get('window').height)*.98,
        backgroundColor:'transparent',
        alignSelf: "center",
        alignItems: "center", 
        justifyContent: "center",
        padding: 2
    },
    backgroundModal:{
        width: Math.round(Dimensions.get('window').width)*.97,
        height: Math.round(Dimensions.get('window').height)*.40,
        padding: 5, 
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 3, 
        borderColor: '#187EFF',
        gap: 20,
    },
    scrollModal:{
        alignItems: 'center',
        gap: 20,
    },
    scroll:{
        alignItems: 'center',
        paddingTop: Math.round(Dimensions.get('window').height)*.15,
        paddingBottom: Math.round(Dimensions.get('window').height)*.1,
        gap: 20,
    },
    headerModal:{
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    contentModal:{
        width: '100%',
        backgroundColor: 'white',
        justifyContent: 'center', 
        alignItems: 'center', 
        alignSelf: 'center', 
        gap: 5
    },
    footerModal:{
        width: '100%',
        justifyContent: 'center', 
        alignItems: 'center',
        flexDirection: "row", 
        gap: 5
    },
    titleModal:{
        color: '#1674EB', 
        fontSize: 35,
        fontWeight: "bold"
    },
    acceptButton:{
        backgroundColor: '#00D68C',
        borderRadius: 10, 
        height: Math.round(Dimensions.get('window').height)*.064,
        width: Math.round(Dimensions.get('window').width)*.44,
        justifyContent: "center",
        alignItems: "center"
    },
    acceptButtonText:{
        color: 'white',
        fontSize: 20
    },
    cancelButton:{
        backgroundColor: 'grey',
        borderRadius: 10, 
        height: Math.round(Dimensions.get('window').height)*.064,
        width: Math.round(Dimensions.get('window').width)*.44,
        justifyContent: "center",
        alignItems: "center"
    },
    cancelButtonText:{
        color: 'white',
        fontSize: 20
    },
    textBox: {
        backgroundColor: 'white',
        width: Math.round(Dimensions.get('window').width)*.80,
        height: Math.round(Dimensions.get('window').height)*.07,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        borderTopColor: '#0F4B99',
        borderRightColor: '#0F4B99',
        borderLeftColor: '#0F4B99',
        borderBottomColor: '#0F4B99',
        borderBottomWidth: 3,
        borderTopWidth: 0.5,
        borderRightWidth: 3,
        borderLeftWidth: 0.5,
        color: 'black',
        textAlign: 'center',
        fontSize: 18,
    },
    label: {
        color: '#0F4B99',
        fontSize: Math.round(Dimensions.get('window').height)*.03,
    },
});