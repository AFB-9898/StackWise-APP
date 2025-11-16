import React from 'react';
import ThemeView from '../../../components/ui/ThemeView';
import ThemeText from '../../../components/ui/ThemeText';

export default function HelpScreen() {
    return (
        <ThemeView className="p-5 items-center justify-center">
            <ThemeText className="text-2xl font-bold text-primary">
                Módulo de Ayuda y Soporte
            </ThemeText>
            <ThemeText className="mt-3 text-lg text-center">
                Preguntas frecuentes y contacto de soporte técnico.
            </ThemeText>
        </ThemeView>
    );
}