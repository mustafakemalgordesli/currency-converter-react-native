import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FIcon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import ConvertScreen from '../screens/ConvertScreen';
import CryptoScreen from '../screens/CryptoScreen';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
            return (
                <Icon
                  name={iconName}
                  size={32}
                  color={color}
                />
            );
          } else if (route.name === 'Favorite') {
            iconName = focused ? 'favorite' : 'favorite-outline';
            return <MIcon name={iconName} size={32} color={color} />;
          } else if(route.name === "Convert") {
            iconName = 'exchange';
            return <FIcon name={iconName} size={32} color={color} />;
          } else if(route.name === "Crypto") {
            iconName = 'bitcoin';
            return <Icon name={iconName} size={32} color={color} />;
          }
          
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle:{
          fontSize: 12
        }
      })}
      >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Convert" component={ConvertScreen} />
      <Tab.Screen name="Crypto" component={CryptoScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
    </Tab.Navigator>
  );
}

export default Tabs;
