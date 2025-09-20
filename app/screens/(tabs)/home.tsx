// app/index.tsx
import { useRouter } from "expo-router";
import { ChartPieIcon, CowIcon, PlantIcon, TractorIcon } from "phosphor-react-native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Gestor Cow</Text>

      <View style={styles.grid}>
        <TouchableOpacity
          onPress={() => router.push("/screens/(modals)/add_bovino")}
          style={[styles.card, { backgroundColor: "#4b7153" }]}
        >
          <CowIcon size={48} color="#fff" weight="fill" />
          <Text style={styles.cardTextWhite}>Cadastro de Animais</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, { backgroundColor: "#fff" }]}>
          <PlantIcon size={48} color="#2e7d32" weight="fill" />
          <Text style={styles.cardText}>Cadastro de Pastos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, { backgroundColor: "#fff" }]}>
          <TractorIcon size={48} color="#5d4037" weight="fill" />
          <Text style={styles.cardText}>Distribuição de Ração</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, { backgroundColor: "#5d4037" }]}>
          <ChartPieIcon size={48} color="#fff" weight="fill" />
          <Text style={styles.cardTextWhite}>Relatórios</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8f0e6",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 40,
    textAlign: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "47%",
    height: 180,
    borderRadius: 16,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
  },
  cardText: {
    marginTop: 12,
    fontSize: 15,
    fontWeight: "600",
    color: "#000",
    textAlign: "center",
  },
  cardTextWhite: {
    marginTop: 12,
    fontSize: 15,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
  },
});
