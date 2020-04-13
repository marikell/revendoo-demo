import { Formik } from 'formik';
import * as yup from 'yup';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
  Alert,
  Text,
} from 'react-native';
import { API_URL } from '../services/config';
import axios from 'axios';
import styles from '../styles';

const handleSubmit = (values, navigation) => {
  axios
    .post(`${API_URL}/auth/signin`, values)
    .then(res => {
      if (res.status == 200) {
        Alert.alert('', 'Login realizado com sucesso.');
        AsyncStorage.setItem('token', res.data)
          .then(value => {
            navigation.navigate('Produtos');
          })
          .catch(err =>
            Alert.alert('Erro', 'Não foi possível realizar essa operação.')
          );
      }
    })
    .catch(err => {
      Alert.alert('Erro', err.response.data);
    });
};

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={yup.object().shape({
        email: yup
          .string()
          .email()
          .required(),
        password: yup
          .string()
          .min(6)
          .required(),
      })}
      onSubmit={values => handleSubmit(values, navigation)}>
      {({ handleSubmit, values, setFieldValue, isValid }) => (
        <View style={styles.container}>
          <TextInput
            value={values.email}
            style={styles.input}
            placeholder="E-mail"
            onChangeText={text => setFieldValue('email', text)}
          />

          <TextInput
            value={values.password}
            style={styles.input}
            secureTextEntry={true}
            placeholder="Senha"
            onChangeText={text => setFieldValue('password', text)}
          />
          <TouchableOpacity
            style={styles.loginButton}
            disabled={!isValid}
            onPress={handleSubmit}>
            <Text style={styles.loginButtonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

export default LoginScreen;
