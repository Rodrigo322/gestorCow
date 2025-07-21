import { router } from "expo-router";
import { ChartBarIcon, CowIcon, GaugeIcon } from "phosphor-react-native";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { Box } from "../../components/box";
import { Button } from "../../components/button";

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Text style={styles.text}>Resumo do confinamento</Text>

      <Box icon={<CowIcon size={64} weight="duotone" />} title="Total de Animais" value="100" />
      <Box icon={<GaugeIcon size={64} weight="duotone" />} title="GMD Médio" value="0,75KG/Dia" />
      <Box
        icon={<ChartBarIcon size={64} weight="duotone" />}
        title="Consumo MS Médio"
        value="2,24% PV"
      />

      <Button title="Ver detalhes" onPress={() => router.navigate("/screens/(stacks)/currais")} />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 60,
    paddingHorizontal: 20,
    backgroundColor: "#019972",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 48,
    color: "#ffff",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#DFEDE9",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 50,
    paddingVertical: 20,
  },
  textButton: {
    fontSize: 18,
    color: "#019972",
    fontWeight: "bold",
  },
});
