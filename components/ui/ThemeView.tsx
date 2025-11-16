import React, { ReactNode } from 'react';
import { View, ViewProps } from 'react-native';

interface ThemeViewProps extends ViewProps {
    children: ReactNode;
    className?: string;
}

const ThemeView: React.FC<ThemeViewProps> = ({ children, className = '', ...props }) => {
    return (
        <View
            className={`flex-1 bg-background dark:bg-dark-background ${className}`}
            {...props}
        >
            {children}
        </View>
    );
};
export default ThemeView;