import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

export default function ListaSelectorBuscador(props) {
    const { dataSource } = props
    return (
        <ScrollView
            onPress={props.onPress}
            style={styles.container}>

            <View style={styles.subContainer}>
                {
                    dataSource.length ?

                        dataSource.map((item,indice) => {
                            return (
                                <View key={indice} style={styles.itemView}>
                                    <Text onPress={() => props.cambiartexto(item)} style={styles.itemText}>{item}</Text>
                                </View>
                            )
                        })

                        :
                        <View
                            style={styles.noResultView}>
                            <Text style={styles.noResultText}>No se encontraron resultados</Text>
                        </View>
                }

            </View>
        </ScrollView>

    )
}


const styles = StyleSheet.create({
    container: {
        width: '80%',
    },
    subContainer: {
        backgroundColor: '#0079A6',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    itemView: {
        backgroundColor: 'white',
        height: 50,
        width: '100%',
        justifyContent: 'center',
        borderWidth: 1,
    },
    itemText: {
        color: 'black',
        paddingHorizontal: 10,
    },
    noResultView: {
        alignSelf: 'center',
        // margin: 20,
        height: 100,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    noResultText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },

});