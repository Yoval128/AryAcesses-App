import React from 'react';
import { AuthProvider } from './src/contexts/AuthContext';  // Importa el contexto
import AppNavigator from './src/navigation/AppNavigator';  // Importa el navegador principal

const App = () => {
    return (
        <AuthProvider>
            <AppNavigator />
        </AuthProvider>
    );
};

export default App;
