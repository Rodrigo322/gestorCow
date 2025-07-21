import { Tabs } from "expo-router";
import { CowIcon, GearSixIcon } from "phosphor-react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#019972" },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#ccc",
        tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Resumo",
          tabBarIcon: ({ color }) => <CowIcon size={24} color={color} weight="duotone" />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Configurações",
          tabBarIcon: ({ color }) => <GearSixIcon size={24} color={color} weight="duotone" />,
        }}
      />
    </Tabs>
  );
}
