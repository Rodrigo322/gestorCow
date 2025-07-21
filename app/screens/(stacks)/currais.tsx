import { CardCurrais } from "@/app/components/cardCurral";
import { router } from "expo-router";
import { FlatList, StyleSheet, View } from "react-native";

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
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 60,
    paddingHorizontal: 20,
    backgroundColor: "#019972",
  },
  text: {
    fontSize: 24,
    color: "#000",
    fontWeight: "bold",
  },
});
