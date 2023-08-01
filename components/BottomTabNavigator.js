import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Wallet, Launch, Decal, Setting} from '../reuse/svg';
import DashBoard from './DashBoard';
import styles from '../BottomTabNavigatorStyle';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="DashBoard"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 400,
        },
        tabBarStyle: {height: 60, borderTopWidth: 1},
      }}>
      <Tab.Screen
        name="DashBoard"
        component={DashBoard}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => {
            return (
              <View style={[styles.icon, focused ? 'red' : 'yellow']}>
                <Home />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={DashBoard}
        options={{
          tabBarLabel: 'Wallet',
          tabBarIcon: ({focused}) => {
            return (
              <Wallet
                style={{
                  width: 50,
                  height: 50,
                  tintColor: focused ? 'red' : 'yellow',
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Launch"
        component={DashBoard}
        options={{
          tabBarLabel: 'Launch',
          tabBarIcon: ({focused}) => {
            return (
              <View style={[styles.launchIcon]}>
                <Launch
                  style={{
                    tintColor: focused ? 'red' : 'yellow',
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Decal"
        component={DashBoard}
        options={{
          tabBarLabel: 'Decal',
          tabBarIcon: ({focused}) => {
            return (
              <Decal
                style={{
                  width: 50,
                  height: 50,
                  tintColor: focused ? 'red' : 'yellow',
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Setting"
        component={DashBoard}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({focused}) => {
            return (
              <Setting
                style={{
                  width: 50,
                  height: 50,
                  tintColor: focused ? 'red' : 'yellow',
                }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
