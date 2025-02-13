# ARYControlAccess

**ARYControlAccess** es una aplicación de gestión de acceso y control de empleados, que incluye funcionalidades de autenticación, visualización de perfiles, y administración de expedientes. Está construida con **React Native** utilizando **Expo** y **TypeScript**.

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

## Estructura del Proyecto

App-ARYControlAccess/
│── .expo/
│── .idea/
│── assets/                   # Recursos estáticos (imágenes, íconos, etc.)
│── constants/                # Variables y configuraciones globales
│── node_modules/             # Dependencias de npm
│── src/
│   ├── components/           # Componentes reutilizables
│   ├── contexts/             # Contextos de la app
│   ├── hooks/                # Hooks personalizados
│   ├── navigation/           # Configuración de la navegación
│   ├── screens/              # Pantallas de la app
│   ├── services/             # Comunicación con la API
│   ├── utils/                # Funciones utilitarias
│── .gitignore
│── app.json
│── package-lock.json
│── package.json
│── tsconfig.json

## Dependencias necesarias para el correcto desarrollo
   ```bash
   npm install @react-navigation/native @react-navigation/stack react-native-gesture-handler react-native-reanimated react-native-screens
   npm install @react-navigation/stack 