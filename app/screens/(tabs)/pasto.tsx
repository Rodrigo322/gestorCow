import { TreeIcon } from "phosphor-react-native";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

const INFO_PASTOS = [
  {
    id: 1,
    NumberPasto: 1,
    area: "50ha",
    QtdAnimais: 20,
  },
  {
    id: 2,
    NumberPasto: 1,
    area: "50ha",
    QtdAnimais: 20,
  },
  {
    id: 3,
    NumberPasto: 1,
    area: "50ha",
    QtdAnimais: 20,
  },
  {
    id: 4,
    NumberPasto: 1,
    area: "50ha",
    QtdAnimais: 20,
  },
];

export default function Pasto() {
  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={INFO_PASTOS}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable style={styles.card}>
            <TreeIcon size={64} weight="duotone" color="#4b7153" />
            <View style={styles.cardInfo}>
              <Text style={[styles.textCard, { fontWeight: "bold", fontSize: 18 }]}>
                Pasto: Nº {item.NumberPasto}
              </Text>
              <Text style={styles.textCard}>Área: {item.area}</Text>
              <Text style={styles.textCard}>Animais: {item.QtdAnimais}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8f0e6",
  },
  card: {
    backgroundColor: "#fff",
    elevation: 5,
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    overflow: "visible",
    margin: 10,
    marginHorizontal: 20,
  },
  textCard: {
    fontSize: 16,
    fontWeight: "semibold",
    color: "#000",
  },
  cardInfo: {
    flex: 1,
    padding: 10,
  },
});
