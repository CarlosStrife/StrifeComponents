import { StyleSheet, Dimensions } from 'react-native';

export const textBoxStyles = StyleSheet.create({
    container1:{
        width: 250, 
        height: 70,
        margin: 5,
        padding: 5,
    },
    label1:{
        color: 'black',
        fontSize: 18,
    },
    textBox1:{
        backgroundColor: 'white',
        flex: 1,
        fontSize: 10,
        paddingTop: 1,
        paddingBottom: 1,
        borderWidth: 1
    },
    container2:{
        width: 250, 
        height: 70,
        margin: 5,
        padding: 10,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: 'transparent',
    },
    label2:{
        backgroundColor: 'white',
        color: 'black',
        fontSize: 15,
        position: 'absolute',
        left: 20,
        zIndex: 1
    },
    textBox2:{
        backgroundColor: 'white',
        flex: 1,
        fontSize: 10,
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderWidth: 1,
        borderRadius: 6
    },
    container3:{
        width: 250, 
        height: 70,
        margin: 5,
        padding: 5,
    },
    label3:{
        backgroundColor: 'white',
        color: 'black',
        fontSize: 18,
    },
    textBox3:{
        backgroundColor: 'white',
        flex: 1,
        fontSize: 10,
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderBottomWidth: 2,
        backgroundColor: 'lightgrey',
    }
});