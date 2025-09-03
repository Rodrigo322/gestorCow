import { useRouter } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

export default function AddBovino() {
  const router = useRouter();
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.8);

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 300 });
    scale.value = withTiming(1, { duration: 300 });
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  const closeModal = () => {
    opacity.value = withTiming(0, { duration: 300 });
    scale.value = withTiming(0.8, { duration: 300 }, (finished) => {
      if (finished) {
        router.back();
      }
    });
  };

  return (
    <View style={styles.overlay}>
      <Animated.View style={[styles.modal, animatedStyle]}>
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
            <Text style={styles.labelInput}>Peso Inicial</Text>
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
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  modal: {
    width: 300,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    elevation: 5,
  },

  overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  containerInput: {
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
