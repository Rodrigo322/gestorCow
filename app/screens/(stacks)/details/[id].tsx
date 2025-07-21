import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Details() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Curral {id}</Text>
      <View style={styles.infoCard}>
        <Text style={styles.text}>Categoria: Nelore (Macho)</Text>
        <Text style={styles.text}>Quantidade: 200</Text>
        <Text style={styles.text}>Dias de confinamento: 30</Text>
        <Text style={styles.text}>Peso inicial: 200,59 kg</Text>
        <Text style={styles.text}>Peso Projetado: 300,59 kg</Text>
        <Text style={styles.text}>GMD: 0,80 KG/Dia</Text>
        <Text style={styles.text}>Consumo: 3,00% PV</Text>
      </View>

      <Text style={styles.infoDieta}>Composição da Dieta:</Text>

      <View style={{ gap: 10 }}>
        <View style={styles.dietaContainer}>
          <Text style={styles.text}>C450:</Text>
          <Text style={styles.text}>40%</Text>
        </View>
        <View style={styles.dietaContainer}>
          <Text style={styles.text}>Milho:</Text>
          <Text style={styles.text}>20%</Text>
        </View>
        <View style={styles.dietaContainer}>
          <Text style={styles.text}>Silagem:</Text>
          <Text style={styles.text}>40%</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 60,
    paddingHorizontal: 20,
    backgroundColor: "#019972",
    gap: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  infoCard: {
    width: "100%",
    backgroundColor: "#53bda2",
    marginTop: 20,
    elevation: 2,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: "semibold",
  },
  infoDieta: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  dietaContainer: {
    width: "100%",
    backgroundColor: "#53bda2",
    elevation: 2,
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
