import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

import { useTheme } from '../../theme/ThemeProvider';

interface ThemeButtonProps extends TouchableOpacityProps {
    title: string;
    className?: string;
    variant?: 'primary' | 'secondary';
}

const ThemeButton: React.FC<ThemeButtonProps> = ({ title, className = '', variant = 'primary', ...props }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const baseClasses = 'py-3 px-6 rounded-lg shadow-md transition duration-150 ease-in-out';
    let variantClasses = '';
    const textClasses = 'text-white font-bold';

    if (variant === 'primary') {
        variantClasses = isDark
            ? 'bg-green-500' 
            : 'bg-primary';  
    } else if (variant === 'secondary') {
        variantClasses = isDark
            ? 'bg-orange-500' 
            : 'bg-secondary';
    }

    return (
        <TouchableOpacity
            className={`${baseClasses} ${variantClasses} ${className}`}
            activeOpacity={0.8}
            {...props}
        >
            <Text className={`${textClasses} text-center`}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default ThemeButton;