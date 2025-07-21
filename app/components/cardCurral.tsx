import { CowIcon } from "phosphor-react-native";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface CardCurraisProps {
  title: string;
  category: string;
  animals: number;
  gmd: string;
  consumo: string;
  handlePress?: () => void;
}

export function CardCurrais({
  title,
  category,
  animals,
  gmd,
  consumo,
  handlePress,
}: CardCurraisProps) {
  return (
    <Pressable style={styles.card} onPress={handlePress}>
      <CowIcon size={64} weight="duotone" />
      <View style={styles.cardInfo}>
        <Text style={[styles.textCard, { fontWeight: "bold", fontSize: 18 }]}>{title}</Text>
        <Text style={styles.textCard}>Categoria: {category}</Text>
        <Text style={styles.textCard}>Animais: {animals}</Text>
        <Text style={styles.textCard}>GMD: {gmd}</Text>
        <Text style={styles.textCard}>Consumo MS: {consumo}</Text>
      </View>
    </Pressable>
  );
}

export const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "#53bda2",
    marginTop: 20,
    elevation: 2,
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
  },
  textCard: {
    fontSize: 16,
    fontWeight: "semibold",
  },
  cardInfo: {
    flex: 1,
    padding: 10,
  },
});
