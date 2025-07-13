import { Text } from "react-native";
import { useFlag } from "@featurevisor/react";

export default function Feature() {
  const featureKey = "my_feature";

  const isEnabled = useFlag(featureKey);

  return (
    <Text style={{ color: "#fff" }}>
      Feature {featureKey} is {isEnabled ? "enabled!" : "not enabled."}
    </Text>
  );
}
