import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function StacksLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#019972",
        },
        headerTintColor: "#fff",
      }}
    >
      <StatusBar style="dark" backgroundColor="#019972" translucent={false} />
      <Stack.Screen name="currais" options={{ title: "Currais" }} />
      <Stack.Screen name="details/[id]" options={{ title: "Detalhes do Curral" }} />
      <Stack.Screen name="add_curral" options={{ title: "Adicionar Curral" }} />
      <Stack.Screen name="dieta/[id]" options={{ title: "Dieta do Curral" }} />
    </Stack>
  );
}
