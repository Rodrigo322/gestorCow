import { Stack } from "expo-router";

export default function ModalsLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#019972" },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen name="add_bovino" options={{ title: "Adicionar Bovino" }} />
    </Stack>
  );
}
