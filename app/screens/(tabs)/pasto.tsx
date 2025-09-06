import { router } from "expo-router";
import { CowIcon, PencilLineIcon, PlusIcon, TrashIcon } from "phosphor-react-native";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Pasto() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.searchInput} placeholder="Buscar..." />

      <View style={styles.box}>
        <CowIcon size={35} weight="duotone" color="#019972" />
        <View style={styles.boxInfo}>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#019972" }}>Numero: 4-555</Text>
          <Text style={{ fontSize: 12, fontWeight: "semibold", color: "#019972" }}>
            Macho, 18 meses
          </Text>
        </View>
        <View style={styles.boxOptions}>
          <TouchableOpacity>
            <PencilLineIcon size={25} weight="bold" color="#3c3fdaff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <TrashIcon size={25} weight="bold" color="#b43b37ff" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.box}>
        <CowIcon size={35} weight="duotone" color="#019972" />
        <View style={styles.boxInfo}>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#019972" }}>Numero: 4-555</Text>
          <Text style={{ fontSize: 12, fontWeight: "semibold", color: "#019972" }}>
            Macho, 18 meses
          </Text>
        </View>
        <View style={styles.boxOptions}>
          <TouchableOpacity>
            <PencilLineIcon size={25} weight="bold" color="#3c3fdaff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <TrashIcon size={25} weight="bold" color="#b43b37ff" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.box}>
        <CowIcon size={35} weight="duotone" color="#019972" />
        <View style={styles.boxInfo}>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#019972" }}>Numero: 4-555</Text>
          <Text style={{ fontSize: 12, fontWeight: "semibold", color: "#019972" }}>
            Macho, 18 meses
          </Text>
        </View>
        <View style={styles.boxOptions}>
          <TouchableOpacity>
            <PencilLineIcon size={25} weight="bold" color="#3c3fdaff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <TrashIcon size={25} weight="bold" color="#b43b37ff" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.box}>
        <CowIcon size={35} weight="duotone" color="#019972" />
        <View style={styles.boxInfo}>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#019972" }}>Numero: 4-555</Text>
          <Text style={{ fontSize: 12, fontWeight: "semibold", color: "#019972" }}>
            Macho, 18 meses
          </Text>
        </View>
        <View style={styles.boxOptions}>
          <TouchableOpacity>
            <PencilLineIcon size={25} weight="bold" color="#3c3fdaff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <TrashIcon size={25} weight="bold" color="#b43b37ff" />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => router.push("/screens/(modals)/add_bovino")}
        style={styles.addButton}
      >
        <PlusIcon size={32} weight="bold" color="#019972" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#019972",
    padding: 20,
  },
  searchInput: {
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },

  box: {
    width: "100%",
    backgroundColor: "#DFEDE9",
    marginTop: 20,
    elevation: 2,
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    gap: 20,
  },
  boxInfo: {
    flex: 1,
  },
  boxOptions: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 32,
  },
});
