import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import '../../assets/icons/perfil-m.png';

const Dashboard = () => {
    const [nombre_usuario, setUsername] = useState("");  // Para almacenar el nombre del usuario
    const navigation = useNavigation();

    useEffect(() => {
        const getUserInfo = async () => {
            try {
                const storedUsername = await AsyncStorage.getItem('username');
                console.log("Nombre recuperado de AsyncStorage:", storedUsername); // Verifica el valor recuperado
                if (storedUsername) {
                    setUsername(storedUsername);
                } else {
                    console.log("No se encontró el nombre de usuario en AsyncStorage");
                }
            } catch (error) {
                console.error("Error reading username from AsyncStorage:", error);
            }
        };

        getUserInfo();
    }, []);



    return (
        <View style={styles.container}>
            {/* Perfil */}
            <View style={styles.perfilSection}>
                <View style={styles.profileContainer}>
                    <Image
                        style={{ width: 100, height: 100, marginBottom: 15 }}
                        source={require("../../assets/icons/perfil-m.png")}
                    />
                    <Text style={styles.name}>{nombre_usuario || "Nombre de usuario"}</Text>
                    {/* Muestra el nombre o un valor por defecto */}
                    <Text style={styles.position}>Administrador</Text>
                </View>
            </View>

            {/* Opciones */}
            <View style={styles.optionsContainer}>
                <TouchableOpacity
                    style={styles.optionButton}
                    onPress={() => navigation.navigate("AltaUsuarios")}
                >
                    <Text style={styles.optionText}>Resumen de Accesos</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.optionButton}
                    onPress={() => navigation.navigate("AltaProductos")}
                >
                    <Text style={styles.optionText}>Estado de las tarjetas RFID</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.optionButton}
                    onPress={() => navigation.navigate("AltaTarjetas")}
                >
                    <Text style={styles.optionText}>Gráficas de actividad</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 0,
        margin: 0,
    },
    perfilSection: {
        width: "100%",
        backgroundColor: "#ff0000",
    },
    profileContainer: {
        alignItems: "center",
        marginBottom: 20,
        width: "100%",
        backgroundColor: "#5c84ff",
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
    },
    position: {
        fontSize: 16,
        color: "gray",
    },
    optionsContainer: {
        width: "100%",
    },
    optionButton: {
        backgroundColor: "#007bff",
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        alignItems: "center",
    },
    optionText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default Dashboard;
