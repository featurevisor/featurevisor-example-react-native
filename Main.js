import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";
import { useStatus } from "@featurevisor/react";

import Feature from "./Feature";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D1117",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function Main() {
  const { isReady } = useStatus();

  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff" }}>
        Open up Main.js to start working on your app!
      </Text>

      {isReady ? (
        <Feature />
      ) : (
        <Text style={{ color: "#fff" }}>
          Featurevisor SDK is getting ready...
        </Text>
      )}

      <StatusBar style="auto" />
    </View>
  );
}
