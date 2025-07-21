import { Stack } from "expo-router";

export default function StacksLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="currais" />
      <Stack.Screen name="details/[id]" />
    </Stack>
  );
}
