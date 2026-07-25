# Featurevisor with React Native

This Expo application uses the [Featurevisor React SDK](https://featurevisor.com/docs/react/) with React Native. The root layout creates a Featurevisor instance, loads a published datafile, and provides the instance to React components.

## Get started

1. Install dependencies

   ```bash
   npm ci
   ```

2. Start the app

   ```bash
   npx expo start
   ```

The output provides options to open the application in a:

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

The Featurevisor evaluation is shown in `app/(tabs)/index.tsx`.

## Checks

```sh
npm run lint
npm run build
```

The build command exports the web application and provides a reproducible CI check without requiring a simulator.
