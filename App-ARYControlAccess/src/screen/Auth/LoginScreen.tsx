import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginForm from '../../components/LoginForm'

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Login</Text>
            <LoginForm />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20, // Añadir un pequeño espacio entre el título y el formulario
    },
});

export default LoginScreen;
