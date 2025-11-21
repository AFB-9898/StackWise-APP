/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './App.{js,jsx,ts,tsx}',
        './app/**/*.{js,jsx,ts,tsx}',
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                // Paleta StackWise
                stackwise: {
                    50: '#f5fbff',
                    100: '#e6f6ff',
                    200: '#cceeff',
                    300: '#99ddff',
                    400: '#66ccff',
                    500: '#1ea0f0', // primary
                    600: '#197fc1',
                    700: '#155f90',
                    800: '#0f3f60',
                    900: '#062030',
                },
                // Neutrales
                neutral: {
                    50: '#fafafa',
                    100: '#f3f4f6',
                    200: '#e5e7eb',
                    300: '#d1d5db',
                    400: '#9ca3af',
                    500: '#6b7280',
                    600: '#4b5563',
                    700: '#374151',
                    800: '#1f2937',
                    900: '#0b1220',
                },
                success: '#22c55e',
                danger: '#ef4444',
                warn: '#f59e0b',
            },
            borderRadius: {
                'lg-2xl': '18px',
            },
        },
    },
    plugins: [],
    // Required by nativewind to avoid problemas con jit en RN
    corePlugins: require('tailwind-rn/unsupported-core-plugins') || {},
};
