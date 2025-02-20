import React from "react";
import {View, Text} from "react-native";

const MainLayout = ({children}) => {
    return (
        <View>
            {children}
        </View>
    );
};

export default MainLayout;
