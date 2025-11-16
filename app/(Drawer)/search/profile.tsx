import React from 'react';
import ThemeView from '../../../components/ui/ThemeView';
import ThemeText from '../../../components/ui/ThemeText';
import ThemeCard from '../../../components/ui/ThemeCard';
import ThemeInput from '../../../components/ui/ThemeInput';

export default function ProfileTabScreen() {
    return (
        <ThemeView className="p-5 items-center">
            <ThemeText className="text-xl font-bold mb-4">
                Pestaña de Búsqueda de Desarrolladores
            </ThemeText>
            <ThemeCard className="w-full mb-5">
                <ThemeText className="text-lg font-semibold mb-2 text-primary">Filtro Detallado</ThemeText>
                <ThemeInput placeholder="Stack (Ej. Node.js + MongoDB)" />
            </ThemeCard>
            <ThemeText className="text-gray-500 dark:text-gray-400">
                Aquí aparecerán los perfiles de los empleados.
            </ThemeText>
        </ThemeView>
    );
}