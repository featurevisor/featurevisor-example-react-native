import "fastestsmallesttextencoderdecoder";
import { createInstance } from "@featurevisor/sdk";
import { FeaturevisorProvider } from "@featurevisor/react";

import Main from "./Main";

// See https://github.com/featurevisor/featurevisor-example-cloudflare
const DATAFILE_URL =
  "https://featurevisor-example-cloudflare.pages.dev/production/featurevisor-tag-all.json";

const datafileContent = await fetch(DATAFILE_URL).then((response) =>
  response.json()
);

const f = createInstance({
  datafile: datafileContent,
  context: { userId: "123" },
});

export default function App() {
  return (
    <FeaturevisorProvider instance={f}>
      <Main />
    </FeaturevisorProvider>
  );
}
