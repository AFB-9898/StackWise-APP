import { Redirect } from 'expo-router';
import React from 'react';

// Este archivo solo redirige la URL raíz (/) al layout principal (el Drawer)
export default function RootIndexRedirect() {
    // Redirige a la ruta index.tsx que está dentro del grupo (Drawer)
    return <Redirect href="/(Drawer)/" />;
}