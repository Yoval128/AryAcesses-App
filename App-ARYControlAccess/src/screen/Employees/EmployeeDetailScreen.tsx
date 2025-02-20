import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import EmployeeDetail from "../../components/Employees/EmployeeDetail";

const EmployeeDetailScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Detalle Empleado</Text>
            <EmployeeDetail/>
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
        marginBottom: 20,
    },
});

export default EmployeeDetailScreen;