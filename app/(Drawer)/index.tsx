import React from 'react';
import ThemeView from '../../components/ui/ThemeView';
import ThemeText from '../../components/ui/ThemeText';
import { useTheme } from '../../theme/ThemeProvider';

export default function IndexScreen() {
    const { theme } = useTheme();

    return (
        <ThemeView className="justify-center items-center">
            <ThemeText className="text-3xl font-bold">
                STACKWISE DASHBOARD
            </ThemeText>
            <ThemeText className="mt-4 text-xl">
                Modo Actual: {theme.toUpperCase()}
            </ThemeText>
            <ThemeText className="mt-2 text-primary">
                ¡Arquitectura de la App completada!
            </ThemeText>
        </ThemeView>
    );
}