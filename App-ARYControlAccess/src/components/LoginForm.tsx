import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LoginForm = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Formulario de Login</Text>
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
    },
});

export default LoginForm;