import { StyleSheet, Dimensions, Platform} from 'react-native';

export const mainStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: Math.round(Dimensions.get('window').width),
    },
});