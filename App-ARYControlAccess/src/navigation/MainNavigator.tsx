import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import LoginScreen from "../screen/Auth/LoginScreen";
import AddEmployeeScreen from "../screen/Employees/AddEmployeeScreen";
import DashboardScreen from "../screen/DashboardScreen";
import EmployeeListScreen from "../screen/Employees/EmployeeListScreen";
import EmployeeDashboardScreen from "../screen/Employees/EmployeeDashboardScreen";
import EmployeeDetailScreen from "../screen/Employees/EmployeeDetailScreen";
import EditEmployeeScreen from "../screen/Employees/EditEmployeeScreen";

const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Dashboard" component={DashboardScreen}/>
            <Stack.Screen name="AddEmployee" component={AddEmployeeScreen}/>
            <Stack.Screen name="EmployeeList" component={EmployeeListScreen}/>
            <Stack.Screen name="EmployeeDashboard" component={EmployeeDashboardScreen}/>
            <Stack.Screen name="EmployeeDetail" component={EmployeeDetailScreen}/>
            <Stack.Screen name="EditEmployee" component={EditEmployeeScreen}/>
        </Stack.Navigator>
    );
};

export default MainNavigator;
