# ARYControlAccess

**ARYControlAccess** es una aplicación de gestión de acceso y control de empleados, que incluye funcionalidades de
autenticación, visualización de perfiles, y administración de expedientes. Está construida con **React Native**
utilizando **Expo** y **TypeScript**.

## Funcionalidades

- Registro e inicio de sesión de usuarios.
- Pantalla de inicio con acceso a diversas funcionalidades.
- CRUD de empleados (por agregar).
- Consulta de expedientes (por agregar).

## Tecnologías utilizadas

- **React Native**: Framework para desarrollar aplicaciones móviles.
- **Expo**: Herramienta para facilitar el desarrollo y construcción de apps en React Native.
- **TypeScript**: Lenguaje de programación para mejorar la robustez del código.
- **React Navigation**: Biblioteca para la navegación en la app.
- **Axios/Fetch**: Para realizar solicitudes HTTP a la API.
- **Context API**: Para la gestión del estado global (autenticación, etc.).

## Instalación

Para instalar y ejecutar este proyecto localmente, sigue estos pasos:

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/Yoval128/AryAcesses-App.git

## Dependencias necesarias para el correcto desarrollo

   ```bash
  npm install @react-navigation/native react-native-gesture-handler react-native-reanimated react-native-screens
  npm install @react-navigation/stack 
  npm install @react-native-picker/picker
  npm install @react-navigation/drawer
  npm install react-native-screens 
  npm install react-native-safe-area-context
  npm install react-native-gesture-handler 
  npm install react-native-reanimated
  npm install @react-navigation/drawer
  npm install react-native-gesture-handler
  expo install @react-native-async-storage/async-storage
  npx expo install @react-native-async-storage/async-storage
  npm install react-native-dotenv --save

   ```

## Estructura del Proyecto

App-ARYControlAccess/
│── .expo/
│── .idea/
│── assets/ # Recursos estáticos (imágenes, íconos, etc.)
│── constants/ # Variables y configuraciones globales
│── node_modules/ # Dependencias de npm
│── src/
├── components/
│ ├── Auth/
│ │ ├── LoginForm.tsx
│ ├── Employees/
│ │ ├── AddEmployeeForm.tsx
│ ├── Layout/
│ │ ├── Sidebar.tsx # Menú lateral
│ │ ├── MainLayout.tsx # Layout principal con Sidebar
├── contexts/
│ ├── AuthContext.tsx # Contexto de autenticación
├── hooks/
│ ├── useAuth.ts # Hook para autenticación
├── navigation/
│ ├── AppNavigator.tsx # Redirige entre Auth y Dashboard
│ ├── MainNavigator.tsx # Contiene las rutas principales
├── screen/
│ ├── Auth/
│ │ ├── LoginScreen.tsx
│ ├── Employees/
│ │ ├── AddEmployeeScreen.tsx
│ │ ├── EmployeeDetailScreen.tsx
│ │ ├── EmployeeListScreen.tsx
│ ├── DashboardScreen.tsx # Pantalla principal tras el login
├── services/
│ ├── api.ts # Llamadas a la API
├── utils/
│ ├── helpers.ts
│── .gitignore
│── app.json
│── package-lock.json
│── package.json
│── tsconfig.json
