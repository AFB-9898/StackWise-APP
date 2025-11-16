import React, { ReactNode } from 'react';
import { Text, TextProps } from 'react-native';

interface ThemeTextProps extends TextProps {
    children: ReactNode;
    className?: string;
}

const ThemeText: React.FC<ThemeTextProps> = ({ children, className = '', ...props }) => {
    return (
        <Text
            className={`text-text-base dark:text-dark-text-base ${className}`}
            {...props}
        >
            {children}
        </Text>
    );
};
export default ThemeText;