import { Stack } from "expo-router";

export default function orderslayout() {
    return <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }}
         />
    </Stack>
}