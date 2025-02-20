import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import AddEmployeeForm from '../../components/Employees/AddEmployeeForm'

const AddEmployeeScreen = () => {
    return (
        <View  style={styles.container}>
            <Image style={{width: 100, height: 100, marginBottom: 15}}
                   source={require("../../../assets/icons/register-icon.png")} />
            <Text style={styles.heading}>Registro de empleados</Text>
            <AddEmployeeForm/>
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

export default AddEmployeeScreen;