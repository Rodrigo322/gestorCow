import { CactusIcon, CowIcon, FadersIcon, ForkKnifeIcon } from "phosphor-react-native";
import { StyleSheet, Text, View } from "react-native";

export default function Settings() {
  return (
    <View style={styles.container}>
      <View style={styles.cardConfig}>
        <CowIcon size={32} weight="duotone" />
        <Text>Adiconar Bovinos</Text>
      </View>
      <View style={styles.cardConfig}>
        <CactusIcon size={32} weight="duotone" />
        <Text>Adiconar Pasto</Text>
      </View>
      <View style={styles.cardConfig}>
        <ForkKnifeIcon size={32} weight="duotone" />
        <Text>Configurar Mistura</Text>
      </View>

      <View style={styles.cardConfig}>
        <FadersIcon size={32} weight="duotone" />
        <Text>Configurar Currais</Text>
      </View>
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
