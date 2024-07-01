import { createStackNavigator } from '@react-navigation/stack';
import TabRoutes from './tab.routes';
import Cad from "../screens/Cad";
import Login from "../screens/Login";
import EsqueciSenha from "../screens/EsqueciSenha";

type RootStackParamList = {
    login: undefined;
    cadastro: undefined;
    home: undefined;
    senha: undefined;
  };
  
  const Stack = createStackNavigator<RootStackParamList>();
 
export default function StackRoutes(){
    return (
        
        <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen 
                    name="login" 
                    component={Login} 
                />
                <Stack.Screen 
                    name="cadastro" 
                    component={Cad} 
                />
                <Stack.Screen
                    name="home" 
                    component={TabRoutes} 
                />
                <Stack.Screen
                    name="senha" 
                    component={EsqueciSenha} 
                />
            </Stack.Navigator>
    )
}
