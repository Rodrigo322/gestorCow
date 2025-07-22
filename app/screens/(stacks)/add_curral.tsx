import Button from "@/app/components/button";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function AddCurral() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Curral</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Nome do Curral" style={styles.input} />
        <Button title="Salvar Curral" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: "#019972",
  },
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    textTransform: "capitalize",
    paddingVertical: 20,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 42,
  },
  input: {
    backgroundColor: "#DFEDE9",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    paddingVertical: 20,
  },
});
