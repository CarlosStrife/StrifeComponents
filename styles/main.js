import { StyleSheet, Dimensions, Platform} from 'react-native';

export const mainStyles = StyleSheet.create({
    mainContainer: {
        width: Math.round(Dimensions.get('window').width),
    },
});