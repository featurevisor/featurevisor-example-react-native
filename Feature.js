import { Text } from "react-native";
import { useFlag } from "@featurevisor/react";

export default function Feature() {
  const featureKey = "my_feature";
  const context = { userId: "123" };

  const isEnabled = useFlag(featureKey, context);

  return (
    <Text style={{ color: "#fff" }}>
      Feature {featureKey} is {isEnabled ? "enabled!" : "not enabled."}
    </Text>
  );
}
