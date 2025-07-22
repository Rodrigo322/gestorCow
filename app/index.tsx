import { Link, router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import Button from "./components/button";

export default function Index() {
  function handleToHome() {
    router.push("/screens/home");
  }

  return (
    <View style={styles.container}>
      <Link href="/screens/home">
        <Text style={styles.text}></Text>
      </Link>

      <Button title="Ir para a tela inicial" onPress={handleToHome} />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 60,
    paddingHorizontal: 20,
    backgroundColor: "#019972",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 48,
    color: "#ffff",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#DFEDE9",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 50,
    paddingVertical: 20,
  },
  textButton: {
    fontSize: 18,
    color: "#019972",
    fontWeight: "bold",
  },
});
