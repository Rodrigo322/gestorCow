import { Tabs } from "expo-router";
import { CactusIcon, CowIcon, GearSixIcon, HouseLineIcon } from "phosphor-react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { backgroundColor: "#4b7153" },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#ccc",
        tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
        headerStyle: {
          backgroundColor: "#4b7153",
        },
        headerTintColor: "#fff",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Início",
          tabBarIcon: ({ color }) => <HouseLineIcon size={24} color={color} weight="duotone" />,
        }}
      />
      <Tabs.Screen
        name="confinamento"
        options={{
          title: "Confinamento",
          tabBarIcon: ({ color }) => <CowIcon size={24} color={color} weight="duotone" />,
        }}
      />
      <Tabs.Screen
        name="pasto"
        options={{
          title: "Animais",
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
