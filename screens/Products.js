import React from 'react';
import { View, Text, Alert, FlatList, AsyncStorage } from 'react-native';
import { API_URL } from '../services/config';
import axios from 'axios';
import styles from '../styles';


export default class ProductsScreen extends React.Component {

    state = {
        products: []
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        AsyncStorage.getItem('token').then(value => {
            const config = {
                headers: { Authorization: `Bearer ${value}` }
            };

            axios.get(
                `${API_URL}/products`,
                config
            ).then(res => {
                this.setState({ products: res.data })
            }).catch(err => {
                Alert.alert('Erro', err.response.data);
            });
        }).catch(err => Alert.alert('Erro', 'Não foi possível realizar essa operação.'));
    }
    render() {
        return (<View>
            <FlatList style={styles.productsList}
                keyExtractor={(item, index) => item.id}
                data={this.state.products}
                renderItem={({ item }) => <View style={styles.productItem}>
                    <Text style={styles.nameItem}>{item.name}</Text>
                    <Text style={styles.descriptionItem}>● R$ {item.price}</Text>
                    <Text style={styles.descriptionItem}>● Qtd: {item.amountStock}</Text>
                </View>}
            />
        </View>);
    }
}