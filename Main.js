import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";
import { useStatus } from "@featurevisor/react";

import Feature from "./Feature";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function Main() {
  const { isReady } = useStatus();

  return (
    <View style={styles.container}>
      <Text>Open up Main.js to start working on your app!</Text>

      {isReady ? (
        <Feature />
      ) : (
        <Text>Featurevisor SDK is getting ready...</Text>
      )}

      <StatusBar style="auto" />
    </View>
  );
}
