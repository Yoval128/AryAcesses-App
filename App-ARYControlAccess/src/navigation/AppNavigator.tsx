import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../contexts/AuthContext'; // Importar el contexto
import MainNavigator from './MainNavigator';
import Sidebar from '../components/Layout/Sidebar';
import LoginScreen from '../screen/Auth/LoginScreen';

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
    const { isAuthenticated } = useAuth();

    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName={isAuthenticated ? "Dashboard" : "Login"}
                drawerContent={(props) => <Sidebar {...props} />}
            >
                {isAuthenticated ? (
                    <>
                        <Drawer.Screen name="Dashboard" component={MainNavigator} />
                        {/* Agrega más pantallas según sea necesario */}
                    </>
                ) : (
                    <Drawer.Screen name="Login" component={LoginScreen} />
                )}
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
