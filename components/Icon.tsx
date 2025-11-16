import React from 'react';
import { useTheme } from '../theme/ThemeProvider'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ComponentProps } from 'react';

type MaterialIconProps = ComponentProps<typeof MaterialCommunityIcons>;

interface AppIconProps extends Omit<MaterialIconProps, 'name'> {
    name: MaterialIconProps['name']; 
}

const Icon: React.FC<AppIconProps> = ({ color, ...props }) => {
    const { theme } = useTheme();

    const defaultColor = theme === 'dark' ? 'white' : 'black';

    return (
        <MaterialCommunityIcons
            color={color || defaultColor}
            {...props}
        />
    );
};

export default Icon;