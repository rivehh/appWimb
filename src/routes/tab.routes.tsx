import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons';

import Search from "../screens/Search";
import New from "../screens/Profile";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return (
        
        <Tab.Navigator screenOptions={{headerShown: false,  tabBarStyle: {
            backgroundColor: '#EBCB4A',
          },
          tabBarActiveTintColor: 'gray',
          tabBarInactiveTintColor: 'black',}}>

            <Tab.Screen 
            name="feed"
            component={Search}
            options={{
                tabBarIcon: ({color, size}) => <Feather name="search" color={color} size={size}/>,
                tabBarLabel: ' '
            }}
            />

            <Tab.Screen 
            name="profile"
            component={Profile}
            options={{
                
                tabBarIcon: ({color, size}) => <Feather name="user" color={color} size={size}/>,
                tabBarLabel: ' '
            }}
            />
        </Tab.Navigator>
    )
}