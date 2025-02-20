import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../contexts/AuthContext';  // Importar el contexto de autenticación

const Sidebar = () => {
    const navigation = useNavigation();
    const { logout } = useAuth(); // Desestructurar la función de logout

    const navigateTo = (screen: string) => {
        navigation.navigate(screen);
    };

    const handleLogout = () => {
        logout(); // Limpiar el estado de autenticación
        navigation.navigate("Login"); // Redirigir al Login
    };

    return (
        <View style={styles.sidebar}>
            <Text style={styles.title}>Menú</Text>
            <TouchableOpacity onPress={() => navigateTo("Dashboard")} style={styles.menuItem}>
                <Text style={styles.menuText}>Inicio</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateTo("EmployeeDashboard")} style={styles.menuItem}>
                <Text style={styles.menuText}>Gestión de Usuarios</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateTo("Gestión de Tarjetas RFID")} style={styles.menuItem}>
                <Text style={styles.menuText}>Gestión de Tarjetas RFID</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateTo("Gestión de sucursales")} style={styles.menuItem}>
                <Text style={styles.menuText}>Gestión de sucursales</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateTo("Registro de Entradas y Salidas")} style={styles.menuItem}>
                <Text style={styles.menuText}>Registro de Entradas y Salidas</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateTo("Historial de Accesos")} style={styles.menuItem}>
                <Text style={styles.menuText}>Historial de Accesos</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateTo("Reportes y Auditoría")} style={styles.menuItem}>
                <Text style={styles.menuText}>Reportes y Auditoría</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateTo("Configuración")} style={styles.menuItem}>
                <Text style={styles.menuText}>Configuración</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogout} style={styles.menuItem}>
                <Text style={styles.menuText}>Cerrar Sesión</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    sidebar: {
        flex: 1,
        backgroundColor: "#333",
        padding: 20,
    },
    title: {
        color: "#fff",
        fontSize: 20,
        marginBottom: 20,
    },
    menuItem: {
        marginBottom: 10,
    },
    menuText: {
        color: "#fff",
    },
});

export default Sidebar;
