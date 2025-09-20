import CardCurrais from "@/app/components/cardCurral";
import { router } from "expo-router";
import { PlusIcon } from "phosphor-react-native";
import { FlatList, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

export const INFOCURRAIS = [
  {
    id: "1",
    title: "Curral 1",
    category: "Nelore (Machos)",
    animals: 150,
    gmd: "0,80KG/Dia",
    consumo: "2,50% PV",
  },
  {
    id: "2",
    title: "Curral 2",
    category: "Nelore (Fêmeas)",
    animals: 120,
    gmd: "0,70KG/Dia",
    consumo: "2,30% PV",
  },
  {
    id: "3",
    title: "Curral 3",
    category: "Nelore (Machos)",
    animals: 300,
    gmd: "0,75KG/Dia",
    consumo: "2,87% PV",
  },
  {
    id: "4",
    title: "Curral 4",
    category: "Nelore (Fêmeas)",
    animals: 250,
    gmd: "0,65KG/Dia",
    consumo: "2,50% PV",
  },
  {
    id: "5",
    title: "Curral 5",
    category: "Angus (Machos)",
    animals: 200,
    gmd: "0,80KG/Dia",
    consumo: "3,00% PV",
  },
  {
    id: "6",
    title: "Curral 6",
    category: "Angus (Fêmeas)",
    animals: 180,
    gmd: "0,70KG/Dia",
    consumo: "2,75% PV",
  },
  {
    id: "7",
    title: "Curral 7",
    category: "Crossbreed (Machos)",
    animals: 220,
    gmd: "0,78KG/Dia",
    consumo: "2,90% PV",
  },
  {
    id: "8",
    title: "Curral 8",
    category: "Crossbreed (Fêmeas)",
    animals: 160,
    gmd: "0,72KG/Dia",
    consumo: "2,60% PV",
  },
  {
    id: "9",
    title: "Curral 9",
    category: "Jersey (Machos)",
    animals: 140,
    gmd: "0,65KG/Dia",
    consumo: "2,40% PV",
  },
  {
    id: "10",
    title: "Curral 10",
    category: "Jersey (Fêmeas)",
    animals: 130,
    gmd: "0,60KG/Dia",
    consumo: "2,20% PV",
  },
];

export default function Currais() {
  function handlePressDetails(id: string) {
    router.push({
      pathname: "/screens/details/[id]",
      params: { id },
    });
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.searchInput} placeholder="Buscar..." />
      <FlatList
        data={INFOCURRAIS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardCurrais
            handlePress={() => handlePressDetails(item.id)}
            title={item.title}
            category={item.category}
            animals={item.animals}
            gmd={item.gmd}
            consumo={item.consumo}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      />
      <TouchableOpacity style={styles.addButton} onPress={() => router.push("/screens/add_curral")}>
        <PlusIcon size={32} weight="bold" color="#4b7153" />
      </TouchableOpacity>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: "#e8f0e6",
  },
  searchInput: {
    backgroundColor: "#DFEDE9",
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    marginTop: 20,
    fontSize: 16,
    color: "#4b7153",
  },
  text: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    textTransform: "capitalize",
    paddingVertical: 20,
  },
  button: {
    backgroundColor: "#DFEDE9",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  textButton: {
    fontSize: 18,
    color: "#019972",
    fontWeight: "bold",
  },
  addButton: {
    position: "absolute",
    bottom: 80,
    right: 20,
    backgroundColor: "#ffff",
    width: 80,
    height: 80,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
});
