import {View, Text, StyleSheet, Image} from 'react-native';
import EmployeeList from '../../components/Employees/EmployeeList'
import React from "react";

const EmployeeListScreen = () => {
    return (
        <View  style={styles.container}>
            <Text style={styles.heading}>Lista de empleados</Text>
            <EmployeeList/>
        </View>
    )
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

export default EmployeeListScreen;