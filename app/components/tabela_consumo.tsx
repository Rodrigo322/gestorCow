import React from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

const dados = [
  {
    data: "12/jul",
    msDieta: "0,4394",
    qtd: "1841",
    msTotal: "808,935",
    peso: "209,59",
    consPV: "2,40%",
  },
  {
    data: "13/jul",
    msDieta: "0,4394",
    qtd: "1861",
    msTotal: "817,723",
    peso: "210,34",
    consPV: "2,41%",
  },
  {
    data: "14/jul",
    msDieta: "0,4394",
    qtd: "1884",
    msTotal: "827,83",
    peso: "211,09",
    consPV: "2,44%",
  },
  {
    data: "15/jul",
    msDieta: "0,4394",
    qtd: "2020",
    msTotal: "887,588",
    peso: "211,84",
    consPV: "2,60%",
  },
  {
    data: "16/jul",
    msDieta: "0,4394",
    qtd: "2153",
    msTotal: "946,028",
    peso: "212,59",
    consPV: "2,76%",
  },
  {
    data: "17/jul",
    msDieta: "0,4394",
    qtd: "2265",
    msTotal: "995,241",
    peso: "213,34",
    consPV: "2,90%",
  },
  {
    data: "18/jul",
    msDieta: "0,4394",
    qtd: "2265",
    msTotal: "995,241",
    peso: "214,09",
    consPV: "2,89%",
  },
  {
    data: "19/jul",
    msDieta: "0,4394",
    qtd: "2255",
    msTotal: "990,847",
    peso: "214,84",
    consPV: "2,86%",
  },
];

export default function TabelaConsumo() {
  return (
    <ScrollView horizontal>
      <View>
        {/* Cabeçalho */}
        <View style={[styles.row, styles.header]}>
          <Text style={styles.cell}>Data</Text>
          <Text style={styles.cell}>Ms dieta</Text>
          <Text style={styles.cell}>Quantidade</Text>
          <Text style={styles.cell}>MS total</Text>
          <Text style={styles.cell}>Peso prj</Text>
          <Text style={styles.cell}>Cons. PV%</Text>
        </View>

        {/* Lista de dados */}
        <FlatList
          data={dados}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <Text style={styles.cell}>{item.data}</Text>
              <Text style={styles.cell}>{item.msDieta}</Text>
              <Text style={styles.cell}>{item.qtd}</Text>
              <Text style={styles.cell}>{item.msTotal}</Text>
              <Text style={styles.cell}>{item.peso}</Text>
              <Text style={styles.cell}>{item.consPV}</Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  header: {
    backgroundColor: "#eee",
  },
  cell: {
    padding: 8,
    minWidth: 100,
    textAlign: "center",
  },
});
