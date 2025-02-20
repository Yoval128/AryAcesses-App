import React from "react";
import {Text, View} from "react-native";
import EditEmployee from "../../components/Employees/EditEmployee";

const EditEmployeeScreen = () => {
    return (
        <View>
            <Text>Editar usuario</Text>
            <EditEmployee/>
        </View>
    )
};

export default EditEmployeeScreen;