import { Drawer } from 'expo-router/drawer';
import React from 'react';
import { useTheme } from '../../theme/ThemeProvider';
import Icon from '../../components/Icon';

export default function DrawerLayout() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    // Colores para personalizar el Drawer según el tema
    const headerTintColor = isDark ? '#E2E2E2' : '#FFFFFF'; // Texto del header (dark-text-base o white)
    const headerBgColor = isDark ? '#21262E' : '#A50101'; // Fondo del header (dark-surface o secondary)
    const drawerBgColor = isDark ? '#14191D' : '#E2E2E2'; // Fondo del Drawer (dark-background o background)
    const activeItemColor = isDark ? '#A72734' : '#FDB300'; // Item activo (dark-primary o primary)
    const inactiveItemColor = isDark ? '#95A5A6' : '#7F8C8D'; // Item inactivo

    return (
        <Drawer
            screenOptions={{
                headerTintColor: headerTintColor,
                headerStyle: {
                    backgroundColor: headerBgColor,
                },
                drawerActiveTintColor: activeItemColor,
                drawerInactiveTintColor: inactiveItemColor,
                drawerStyle: {
                    backgroundColor: drawerBgColor,
                },
            }}
        >
            <Drawer.Screen
                name="index"
                options={{
                    drawerLabel: "Dashboard (Inicio)",
                    title: "StackWise | Inicio",
                    drawerIcon: ({ color, size }) => (
                        <Icon name="view-dashboard" color={color} size={size} />
                    ),
                }}
            />

            <Drawer.Screen
                name="search" 
                options={{
                    drawerLabel: "Buscar",
                    title: "Búsqueda de Talentos/Ofertas",
                    drawerIcon: ({ color, size }) => (
                        <Icon name="magnify" color={color} size={size} />
                    ),
                }}
            />

            <Drawer.Screen
                name="profiles/index"
                options={{
                    drawerLabel: "Mi Perfil",
                    title: "Perfil del Usuario",
                    drawerIcon: ({ color, size }) => (
                        <Icon name="account" color={color} size={size} />
                    ),
                }}
            />

            <Drawer.Screen
                name="messages/index"
                options={{
                    drawerLabel: "Mensajes",
                    title: "Bandeja de Entrada",
                    drawerIcon: ({ color, size }) => (
                        <Icon name="message-text" color={color} size={size} />
                    ),
                }}
            />

            <Drawer.Screen
                name="help/index"
                options={{
                    drawerLabel: "Ayuda y Soporte",
                    title: "Soporte",
                    drawerIcon: ({ color, size }) => (
                        <Icon name="help-circle" color={color} size={size} />
                    ),
                }}
            />

            <Drawer.Screen
                name="settings"
                options={{
                    drawerLabel: "Configuración",
                    title: "Ajustes de la App",
                    drawerIcon: ({ color, size }) => (
                        <Icon name="cog" color={color} size={size} />
                    ),
                }}
            />
        </Drawer>
    );
}