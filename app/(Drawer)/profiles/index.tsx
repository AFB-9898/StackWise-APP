import React from 'react';
import ThemeView from '../../../components/ui/ThemeView';
import ThemeText from '../../../components/ui/ThemeText';

export default function ProfilesScreen() {
    return (
        <ThemeView className="p-5 items-center justify-center">
            <ThemeText className="text-2xl font-bold text-primary">
                Módulo de Perfiles
            </ThemeText>
            <ThemeText className="mt-3 text-lg text-center">
                Aquí se mostrará el perfil del usuario o un listado de perfiles guardados.
            </ThemeText>
        </ThemeView>
    );
}