import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../../contexts/AuthContext';
import {API_URL} from '@env';

const LoginForm = () => {
    const navigation = useNavigation();
    const {login} = useAuth(); // Obtener la función login del contexto

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        console.log("Intentando iniciar sesión con:", email, password);

        try {
            const response = await fetch(`${API_URL}/api/auth/login`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({email, password})
            });

            const data = await response.json();
            if (response.ok) {
                login(data.user); // Guardamos al usuario logueado en el contexto
                Alert.alert("Login exitoso", "Bienvenido");
                navigation.navigate("Dashboard"); // Redirigir al Dashboard
            } else {
                Alert.alert("Error", data.error || "Usuario o contraseña incorrectos");
            }
        } catch (error) {
            console.error("Error en la autenticación:", error);
            Alert.alert("Error", "No se pudo conectar al servidor");
        }
    };

    return (
        <View style={styles.formContainer}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Login" onPress={handleLogin}/>
        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {width: '100%', paddingHorizontal: 20},
    input: {height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 5, marginBottom: 10, paddingLeft: 10},
});

export default LoginForm;
