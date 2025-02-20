import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const EmployeeDashboard = () => {
    const navigation = useNavigation();

    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Button title="Ver Lista de Empleados" onPress={() => navigation.navigate("EmployeeList")}/>
            <Button title="Agregar Empleado" onPress={() => navigation.navigate("AddEmployee")}/>
        </View>
    );
};

export default EmployeeDashboard;