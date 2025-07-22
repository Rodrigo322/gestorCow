import Button from "@/app/components/button";
import { router, useLocalSearchParams } from "expo-router";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";

const detalhesCurral = {
  id: "3",
  nome: "Curral 3",
  categoria: "Nelore",
  sexo: "Machos",
  quantidade: 161,
  gmd: 0.75,
  pesoInicial: 200.59,
  pesoProjetado: 211.09,
  consumoMS: 0.0263,
  diasConfinamento: 14,
  dieta: [
    { ingrediente: "Silagem", porcentagem: 60 },
    { ingrediente: "Milho", porcentagem: 30 },
    { ingrediente: "Núcleo", porcentagem: 10 },
  ],
  consumoHistorico: [
    10.2, 11.0, 11.4, 12.0, 12.3, 12.5, 12.6, 12.6, 12.7, 12.65, 12.66, 12.65, 12.65, 12.65,
  ],
};

export default function Details() {
  const { id } = useLocalSearchParams();
  const screenWidth = Dimensions.get("window").width - 32;

  function handleInsertDieta() {
    let parsedId: string | number = Array.isArray(id) ? id[0] : id;
    router.push({
      pathname: "/screens/dieta/[id]",
      params: { id: parsedId },
    });
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Curral {id}</Text>
        <View style={styles.infoCard}>
          <Text style={styles.text}>Categoria: Nelore (Macho)</Text>
          <Text style={styles.text}>Quantidade: 200</Text>
          <Text style={styles.text}>Dias de confinamento: 30</Text>
          <Text style={styles.text}>Peso inicial: 200,59 kg</Text>
          <Text style={styles.text}>Peso Projetado: 300,59 kg</Text>
          <Text style={styles.text}>GMD: 0,80 KG/Dia</Text>
          <Text style={styles.text}>Consumo: 3,00% PV</Text>
        </View>

        <LineChart
          data={{
            labels: Array.from(
              { length: detalhesCurral.consumoHistorico.length },
              (_, i) => `${i + 1}`
            ),
            datasets: [{ data: detalhesCurral.consumoHistorico }],
          }}
          width={screenWidth}
          height={220}
          yAxisSuffix=" kg"
          chartConfig={{
            backgroundColor: "#53bda2",
            backgroundGradientFrom: "#f3f4f6",
            backgroundGradientTo: "#e5e7eb",
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(59, 130, 246, ${opacity})`,
            labelColor: () => "#374151",
          }}
          bezier
          style={{ borderRadius: 12, marginVertical: 12 }}
        />

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

        <Button title="Inserir dieta" onPress={handleInsertDieta} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 60,
    paddingHorizontal: 20,
    backgroundColor: "#019972",
    gap: 10,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#DFEDE9",
  },
  infoCard: {
    width: "100%",
    backgroundColor: "#DFEDE9",
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
    color: "#DFEDE9",
  },
  dietaContainer: {
    width: "100%",
    backgroundColor: "#DFEDE9",
    elevation: 2,
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
