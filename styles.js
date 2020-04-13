
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        margin: 15,
        height: 40,
        width: 200,
        fontSize: 15,
        borderBottomWidth: 1,
        borderColor: '#7a42f4',
        color: '#7a42f4'
    },
    loginButton: {
        backgroundColor: '#7a42f4',
        margin: 15,
        height: 40,
        width: 100,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginButtonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    nameItem: {
        fontWeight: 'bold',
        fontSize: 20        
    },
    descriptionItem: {
        fontSize: 20,
        color: '#7a42f4',
        marginLeft: 15
    },
    productsList: {
        margin: 15
    }
});
