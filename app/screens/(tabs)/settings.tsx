import { useRouter } from "expo-router";
import { CactusIcon, CowIcon, FadersIcon, ForkKnifeIcon } from "phosphor-react-native";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Settings() {
  const router = useRouter();
  function handleAddBovino() {
    router.push("/screens/(modals)/add_bovino");
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.cardConfig} onPress={handleAddBovino}>
        <CowIcon size={32} weight="duotone" />
        <Text>Adicionar Bovinos</Text>
      </Pressable>
      <Pressable style={styles.cardConfig}>
        <CactusIcon size={32} weight="duotone" />
        <Text>Adicionar Pasto</Text>
      </Pressable>
      <Pressable style={styles.cardConfig}>
        <ForkKnifeIcon size={32} weight="duotone" />
        <Text>Configurar Mistura</Text>
      </Pressable>

      <Pressable style={styles.cardConfig}>
        <FadersIcon size={32} weight="duotone" />
        <Text>Configurar Currais</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#019972",
  },
  text: {
    fontSize: 48,
    color: "#ffff",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  cardConfig: {
    backgroundColor: "#DFEDE9",
    borderRadius: 8,
    padding: 15,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    elevation: 5,
  },
});
