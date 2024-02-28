import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222',
        alignItems: 'center',
        justifyContent: 'center',
    },
    area: {
        flex: 1,
        alignItems: 'center'
    },
    control: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        backgroundColor: '#111',
        padding: 20
    },
    controlText: {
        color: '#FFF',
        fontSize: 16
    },
    controlButton: {
        flex: 1,
        backgroundColor: '#0066ff',
        borderRadius: 10,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    block: {
        position: 'absolute',
        backgroundColor: 'red',
        borderWidth: 2,
        borderColor: '#FFF',
        borderRadius: 5,
    },
});

export default styles;