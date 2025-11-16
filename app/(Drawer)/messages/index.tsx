import React from 'react';
import ThemeView from '../../../components/ui/ThemeView';
import ThemeText from '../../../components/ui/ThemeText';

export default function MessagesScreen() {
    return (
        <ThemeView className="p-5 items-center justify-center">
            <ThemeText className="text-2xl font-bold text-primary">
                Módulo de Mensajes
            </ThemeText>
            <ThemeText className="mt-3 text-lg text-center">
                Interfaz para la comunicación entre desarrolladores y reclutadores.
            </ThemeText>
        </ThemeView>
    );
}