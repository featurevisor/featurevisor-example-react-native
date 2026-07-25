import { FeaturevisorProvider } from "@featurevisor/react";
import { createFeaturevisor } from "@featurevisor/sdk";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "expo-router/react-navigation";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

const DATAFILE_URL =
  "https://featurevisor-example-cloudflare.pages.dev/production/featurevisor-tag-all.json";

const f = createFeaturevisor({
  context: { userId: "123" },
});

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [datafileLoaded, setDatafileLoaded] = useState(false);
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    let active = true;

    fetch(DATAFILE_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        return response.json();
      })
      .then((datafileContent) => {
        if (active) {
          f.setDatafile(datafileContent, true);
        }
      })
      .catch((error) => {
        console.error("Could not load Featurevisor datafile:", error);
      })
      .finally(() => {
        if (active) {
          setDatafileLoaded(true);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  if (!loaded || !datafileLoaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <FeaturevisorProvider instance={f}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </FeaturevisorProvider>
    </ThemeProvider>
  );
}
