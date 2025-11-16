import React from 'react';
import { Tabs } from 'expo-router';
import { useTheme } from '../../../theme/ThemeProvider'; 
import Icon from '../../../components/Icon'; 

export default function SearchTabLayout() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: isDark ? '#A72734' : '#FDB300', 
                tabBarInactiveTintColor: isDark ? '#95A5A6' : '#7F8C8D', 
                tabBarStyle: {
                    backgroundColor: isDark ? '#21262E' : '#E2E2E2', 
                    borderTopWidth: 0,
                },
            }}
        >
            <Tabs.Screen
                name="jobs" 
                options={{
                    title: 'Buscar Empleos',
                    tabBarIcon: ({ color }) => <Icon name="briefcase" color={color} />,
                }}
            />
            <Tabs.Screen
                name="profile" 
                options={{
                    title: 'Buscar Desarrolladores',
                    tabBarIcon: ({ color }) => <Icon name="account-group" color={color} />,
                }}
            />
        </Tabs>
    );
}