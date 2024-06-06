import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cad from "../screens/Cad";
import Login from "../screens/Login";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen 
                    name="home" 
                    
                    component={Login}
                />
                <Stack.Screen 
                    name="cadastro" 
                    component={Cad} 
                />
            </Stack.Navigator>
    );
}
