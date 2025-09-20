import { Stack } from "expo-router";

export default function StacksLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#4b7153",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen name="currais" options={{ title: "Currais" }} />
      <Stack.Screen name="details/[id]" options={{ title: "Detalhes do Curral" }} />
      <Stack.Screen name="add_curral" options={{ title: "Adicionar Curral" }} />
      <Stack.Screen name="dieta/[id]" options={{ title: "Dieta do Curral" }} />
    </Stack>
  );
}
