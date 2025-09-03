import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function AddBovino() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.containerInput}>
        <View style={styles.inputGroup}>
          <Text style={styles.labelInput}>Número</Text>
          <TextInput style={styles.input} placeholder="Ex: 4-155" />
        </View>

        <View style={styles.inputsDualGroup}>
          <View style={[styles.inputGroup, { width: "48%" }]}>
            <Text style={styles.labelInput}>Sexo</Text>
            <TextInput style={styles.input} placeholder="Ex: Macho/Fêmea" />
          </View>

          <View style={[styles.inputGroup, { width: "48%" }]}>
            <Text style={styles.labelInput}>Raça</Text>
            <TextInput style={styles.input} placeholder="Ex: Nelore" />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.labelInput}>Proprietário</Text>
          <TextInput style={styles.input} placeholder="Ex: Fazenda" />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.labelInput}>Peso</Text>
          <TextInput style={styles.input} placeholder="Ex: 500kg" />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.labelInput}>Data de Nascimento</Text>
          <TextInput style={styles.input} placeholder="Ex: 28/02/2025" />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.labelButton}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  containerInput: {
    marginBottom: 200,
    width: "100%",
    padding: 20,
    gap: 20,
  },
  inputGroup: {
    gap: 10,
  },
  inputsDualGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  labelInput: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#075E55",
  },
  labelButton: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  input: {
    width: "100%",
    height: 60,
    paddingLeft: 10,
    color: "#075E55",
    fontWeight: "700",
    borderWidth: 1,
    borderColor: "#075E55",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  button: {
    height: 60,
    backgroundColor: "#019972",
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
});
