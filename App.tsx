import { StatusBar } from "expo-status-bar";
import { Platform, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import GroupedList from "./components/GroupedList";
import Row from "./components/Row";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollview}>
        <GroupedList
          header="Datos"
          footer="Usa estos menús para conocer más sobre los datos de este camión en particular."
        >
          <Row
            title="Documentación"
            trailingType="chevron"
            caption="Ver más"
            icon="home-filled"
            color="#2427de"
          />
          <Row title="Ficha técnica" trailingType="chevron" />
          <Row title="Histórico de cargas" trailingType="chevron" />
          <Row title="Histórico de rutas" trailingType="chevron" />
        </GroupedList>

        <GroupedList header="Acciones">
          <Row title="Registrar carga de combustible" trailingType="chevron" />
          <Row title="Solicitar mantenimiento" trailingType="chevron" />
        </GroupedList>
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  scrollview: {
    backgroundColor: "#f2f2f7",
    width: "100%", // Ensures full width on mobile screens
    ...Platform.select({
      web: {
        maxWidth: 400, // Restricts to max 400 points on web
        minWidth: 250,
      },
    }),
  },
});
