import { Stack } from 'expo-router'; 
import { ThemeProvider } from '../theme/ThemeProvider';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import React from 'react';

const RootLayout = () => {
    return (
        <GestureHandlerRootView style={styles.container}>
            <ThemeProvider>
                <Stack screenOptions={{ headerShown: false }} />
            </ThemeProvider>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default RootLayout;