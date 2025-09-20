// app/settings.tsx
import {
  BellIcon,
  CaretRightIcon,
  GlobeIcon,
  InfoIcon,
  LockIcon,
  UserIcon,
} from "phosphor-react-native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <TouchableOpacity style={styles.item}>
          <View style={styles.itemContent}>
            <UserIcon size={28} color="#2e7d32" weight="regular" />
            <Text style={styles.itemText}>Perfil do Usuário</Text>
          </View>
          <CaretRightIcon size={22} color="#888" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <View style={styles.itemContent}>
            <BellIcon size={28} color="#2e7d32" weight="regular" />
            <Text style={styles.itemText}>Notificações</Text>
          </View>
          <CaretRightIcon size={22} color="#888" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <View style={styles.itemContent}>
            <GlobeIcon size={28} color="#2e7d32" weight="regular" />
            <Text style={styles.itemText}>Idioma</Text>
          </View>
          <CaretRightIcon size={22} color="#888" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <View style={styles.itemContent}>
            <LockIcon size={28} color="#8d6e63" weight="regular" />
            <Text style={styles.itemText}>Segurança</Text>
          </View>
          <CaretRightIcon size={22} color="#888" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <View style={styles.itemContent}>
            <InfoIcon size={28} color="#8d6e63" weight="regular" />
            <Text style={styles.itemText}>Sobre o App</Text>
          </View>
          <CaretRightIcon size={22} color="#888" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E9F0E7",
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 30,
    textAlign: "center",
  },
  list: {
    gap: 16,
  },
  item: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 2,
  },
  itemContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  itemText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
  },
});
