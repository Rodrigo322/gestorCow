// app/index.tsx
import { useRouter } from "expo-router";
import { ArrowRightIcon } from "phosphor-react-native";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  function handleHome() {
    router.push("/(tabs)/home");
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/background.png")}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          {/* Logo e títulos */}
          <View style={styles.logoContainer}>
            <View style={styles.logo}>
              <Text style={styles.logoText}>🐄</Text>
            </View>
            <Text style={styles.title}>Gestão Inteligente de Gado</Text>
            <Text style={styles.subtitle}>
              Controle de animais, pastos e ração de forma simples e eficiente
            </Text>
          </View>
        </View>

        <TouchableOpacity onPress={handleHome} style={styles.button}>
          <Text style={styles.text}>Começar</Text>
          <ArrowRightIcon color="#FFF" size={24} />
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },

  button: {
    height: 60,
    backgroundColor: "#4b7153",
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    marginBottom: 20,
    marginHorizontal: 20,
    flexDirection: "row",
    gap: 20,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(11, 107, 58, 0.6)", // overlay semi-transparente para melhor legibilidade
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    backgroundColor: "#fff",
    width: 60,
    height: 60,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  logoText: {
    fontSize: 28,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#EAEAEA",
    marginTop: 8,
    textAlign: "center",
  },
});
