// tailwind.config.js
module.exports = {
    darkMode: 'class',
    content: [
        './app/**/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                // --- Paleta de Colores StackWise ---
                // Colores para el modo CLARO 
                'primary': '#FDB300',      // Amarillo
                'secondary': '#A50101',    // Rojo Oscuro
                'background': '#E2E2E2',   // Fondo Base Claro
                'surface': '#FFFFFF',      // Color de Card/Superficie
                'text-base': '#1D215A',    // Texto principal oscuro

                // Colores para el modo OSCURO
                'dark-primary': '#A72734',      // Borgoña
                'dark-secondary': '#972232',    // Rojo Ladrillo
                'dark-background': '#14191D',   // Fondo Base Oscuro (casi negro)
                'dark-surface': '#21262E',      // Color de Card/Superficie Oscura (gris azulado)
                'dark-text-base': '#E2E2E2',    // Texto principal claro
            },
        },
    },
    plugins: [],
};