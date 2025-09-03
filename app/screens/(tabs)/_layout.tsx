import { Tabs } from "expo-router";
import { CactusIcon, CowIcon, GearSixIcon } from "phosphor-react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { backgroundColor: "#019972" },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#ccc",
        tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
        headerStyle: {
          backgroundColor: "#019972",
        },
        headerTintColor: "#fff",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Confinamento",
          tabBarIcon: ({ color }) => <CowIcon size={24} color={color} weight="duotone" />,
        }}
      />
      <Tabs.Screen
        name="pasto"
        options={{
          title: "Pasto",
          tabBarIcon: ({ color }) => <CactusIcon size={24} color={color} weight="duotone" />,
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
