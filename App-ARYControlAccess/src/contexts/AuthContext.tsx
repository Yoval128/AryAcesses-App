import React, {createContext, useState, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Leer el estado de autenticación desde AsyncStorage cuando se inicia la app
    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                const storedAuthStatus = await AsyncStorage.getItem('isAuthenticated');
                if (storedAuthStatus === 'true') {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                }
            } catch (error) {
                console.error("Error reading auth status from AsyncStorage:", error);
            }
        };

        checkAuthStatus();
    }, []);

    // Guardar el estado de autenticación en AsyncStorage
    const login = async (nombre_usuario) => {
        setIsAuthenticated(true);
        try {
            await AsyncStorage.setItem('isAuthenticated', 'true');
            await AsyncStorage.setItem('username', nombre_usuario);  // Guardamos el nombre aquí
            console.log("Nombre de usuario guardado:", nombre_usuario);  // Para verificar
        } catch (error) {
            console.error("Error saving auth status to AsyncStorage:", error);
        }
    };


    const logout = async () => {
        setIsAuthenticated(false);
        try {
            await AsyncStorage.setItem('isAuthenticated', 'false');
        } catch (error) {
            console.error("Error saving auth status to AsyncStorage:", error);
        }
    };

    const checkStorage = async () => {
        const value = await AsyncStorage.getItem('isAuthenticated');
        console.log("Auth status in AsyncStorage:", value);
    };
    checkStorage();


    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};
