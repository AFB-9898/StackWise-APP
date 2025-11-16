import React from 'react';
import { View, Switch, StyleSheet } from 'react-native';
import ThemeView from '../../components/ui/ThemeView';
import ThemeText from '../../components/ui/ThemeText';
import ThemeButton from '../../components/ui/ThemeButton';
import { useTheme } from '../../theme/ThemeProvider';

export default function SettingsScreen() {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <ThemeView className="p-5">
            <ThemeText className="text-2xl font-bold mb-6">
                Ajustes de la Aplicación ⚙️
            </ThemeText>

            <View className="flex-row items-center justify-between p-4 rounded-lg border-b border-gray-200 dark:border-gray-700 mb-6">
                <ThemeText className="text-lg">
                    Modo Oscuro (Dark Mode)
                </ThemeText>

                <Switch
                    trackColor={{ false: "#767577", true: "#3DDC84" }} 
                    thumbColor={isDark ? "#FFFFFF" : "#F4F3F4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleTheme} 
                    value={isDark} 
                />
            </View>

            <ThemeText className="text-xl font-semibold mt-4 mb-3 text-primary">
                Botón de Prueba
            </ThemeText>

            <ThemeButton
                title="Guardar Configuración"
                onPress={() => alert('Configuración guardada!')}
                className="mb-4"
                variant="primary"
            />

            <ThemeText className="mt-8 text-sm text-center text-gray-500 dark:text-gray-400">
                Tema actual: {theme.toUpperCase()}
            </ThemeText>

        </ThemeView>
    );
}