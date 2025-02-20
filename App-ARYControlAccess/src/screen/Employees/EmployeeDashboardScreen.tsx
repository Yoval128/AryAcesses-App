import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from "react";
import EmployeeDashboard from "../../components/Employees/EmployeeDashboard";

const EmployeeDashboardScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Dashboard de Empleados</Text>
                <EmployeeDashboard/>
        </View>
    );
};

export default EmployeeDashboardScreen;
