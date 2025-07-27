import { Stack } from "expo-router";
import React from "react";
import { ToastProvider } from 'react-native-toast-notifications';

export default function RootLayout() {
    return (
       <ToastProvider>
        
        <Stack>
            <Stack.Screen 
                name="(shop)" 
                options={{ headerShown: false, title: "Shop" }}
            />
            <Stack.Screen
                name="category" 
                options={{ headerShown: false, title: "category" }} 
            />
            <Stack.Screen
                name="product"
                options={{ headerShown: true, title: "Product" }}
            />
            <Stack.Screen 
                name="cart" 
                options={{ presentation: "modal", title: "Shopping Cart" }} 
            />
            <Stack.Screen
                name="aut" 
                options={{ headerShown: true }}
            />
        </Stack>
       </ToastProvider>
    );
};