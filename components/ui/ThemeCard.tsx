import React, { ReactNode } from 'react';
import { View, ViewProps } from 'react-native';

interface ThemeCardProps extends ViewProps {
    children: ReactNode;
    className?: string;
}

const ThemeCard: React.FC<ThemeCardProps> = ({ children, className = '', ...props }) => {
    return (
        <View
            className={`
        bg-surface dark:bg-dark-surface 
        p-4 rounded-xl shadow-md 
        border border-gray-100 dark:border-gray-700
        ${className}
    `}
            {...props}
        >
            {children}
        </View>
    );
};
export default ThemeCard;