import "fastestsmallesttextencoderdecoder";
import { createInstance } from "@featurevisor/sdk";
import { FeaturevisorProvider } from "@featurevisor/react";

import Main from "./Main";

// See https://github.com/featurevisor/featurevisor-example-cloudflare
const DATAFILE_URL =
  "https://featurevisor-example-cloudflare.pages.dev/production/datafile-tag-all.json";

const f = createInstance({
  datafileUrl: DATAFILE_URL,
  onReady: () => console.log("Featurevisor SDK is ready!"),

  refreshInterval: 60 * 5, // 5 minutes
  onRefresh: () => console.log("Featurevisor SDK has refreshed!"),
  onUpdate: () =>
    console.log(
      "Featurevisor SDK has refreshed, and latest datafile has new changes!"
    ),
});

export default function App() {
  return (
    <FeaturevisorProvider instance={f}>
      <Main />
    </FeaturevisorProvider>
  );
}
