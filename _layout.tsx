import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen 
                name="(shop)" 
                options={{ headerShown: false, title: "Shop" }}
            />
            <Stack.Screen
                name="category" 
                options={{ headerShown: true, title: "category" }} 
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
    );
};