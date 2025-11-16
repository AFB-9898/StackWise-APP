import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { useTheme } from '../../theme/ThemeProvider';

interface ThemeInputProps extends TextInputProps {
    className?: string;
    isError?: boolean;
}

const ThemeInput: React.FC<ThemeInputProps> = ({ className = '', isError = false, ...props }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    let baseClasses = 'p-3 rounded-lg border-2 ';

    // Bordes del input
    let borderClasses = isError
        ? 'border-red-500'
        : 'border-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-dark-primary';

    let textClasses = 'text-text-base dark:text-dark-text-base';

    const placeholderTextColor = isDark ? '#A0A0A0' : '#808080'; 

    return (
        <TextInput
            className={`${baseClasses} ${borderClasses} ${textClasses} ${className}`}
            placeholderTextColor={placeholderTextColor}
            keyboardAppearance={theme}
            {...props}
        />
    );
};
export default ThemeInput;