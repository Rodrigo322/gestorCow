import Button from "@/app/components/button";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function Dieta() {
  const { id } = useLocalSearchParams();

  return (
    <ScrollView contentContainerStyle={{ justifyContent: "space-between", flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Dieta do curral {id}</Text>
        <View style={styles.card}>
          <Text style={styles.titleCard}>Consumo dia anterior</Text>
          <TextInput style={styles.valor}>1310</TextInput>

          <View style={styles.tableHeader}>
            <Text style={styles.col1}>Trato</Text>
            <Text style={styles.col3}>Consumo previsto</Text>
          </View>
          {[1, 2, 3].map((trato, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.col1}>{trato}°</Text>
              <Text style={styles.col2}></Text>
              <Text style={styles.col3}>437</Text>
            </View>
          ))}
        </View>
        <View style={styles.card}>
          <Text style={styles.titleCard}>Aumento em %</Text>
          <TextInput placeholder="Insira aqui" value="0%" style={styles.input} />
        </View>
        <Button title="Salvar Dieta" onPress={() => {}} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: "#019972",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  text: {
    fontSize: 18,
    color: "#fff",
    marginTop: 10,
    alignSelf: "center",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 100,
    backgroundColor: "#DFEDE9",
    padding: 20,
    borderRadius: 8,
    alignItems: "center",
    paddingVertical: 20,
    textAlign: "center",
    fontSize: 34,
  },
  card: {
    backgroundColor: "#DFEDE9",
    borderRadius: 8,
    padding: 12,
    margin: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  titleCard: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#333",
    fontSize: 16,
    marginBottom: 4,
  },
  valor: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    color: "#333",
    marginBottom: 12,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  col1: {
    flex: 1,
    textAlign: "left",
    paddingLeft: 4,
  },
  col2: {
    flex: 2,
    textAlign: "center",
  },
  col2Highlight: {
    flex: 2,
    textAlign: "center",
    backgroundColor: "#fcd9bf",
    borderRadius: 4,
    paddingVertical: 2,
  },
  col3: {
    flex: 2,
    textAlign: "right",
    paddingRight: 4,
  },
});
