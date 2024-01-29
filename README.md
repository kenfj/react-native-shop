# React Native Expo Shop App

* React Native Demo EC Shop App using Expo Tamagui and Supabase
* Inspired by Simon Grimm's great tutorial
  - Build a Full-stack E-Commerce app using React Native
  - https://www.youtube.com/watch?v=3tobiO8zDDA

## Quick Start

```bash
node --version
# v20.11.0
npm --version
# 10.4.0
pnpm --version
# 8.14.3

# install packages (it will create node_modules directory)
pnpm install --frozen-lockfile
# or
pnpm exec expo install
```

* start Supabase docker
  - https://supabase.com/docs/guides/self-hosting/docker
  - http://localhost:8000/project/default
* run `schema.sql` and `data.sql` in `./sql` on supabase
  - http://localhost:8000/project/default/sql/1
* check supabase URL in API Settings
  - http://localhost:8000/project/default/settings/api
* check supabase Project API key in API Docs
  - http://localhost:8000/project/default/api?resource=products
  - select `anon (public)`
* copy `.env.sample` as `.env` and update
  - `EXPO_PUBLIC_API_URL` is Supabase URL
  - `EXPO_PUBLIC_API_KEY` is Supabase anon key

```bash
# start simulator
pnpm run ios
pnpm run android

# start with clear cache sometimes
pnpm exec expo start --ios -c
pnpm exec expo start --android -c
```

## Setup Project

```bash
# expo stack quick setup https://createexpostack.com/
pnpm create expo-stack
# select TypeScript, Expo Router and Tabs

# https://docs.expo.dev/versions/latest/sdk/map-view/
pnpm exec expo install react-native-maps

# https://docs.expo.dev/guides/using-supabase/
pnpm exec expo install @supabase/supabase-js \
  @react-native-async-storage/async-storage \
  react-native-url-polyfill

# https://github.com/pmndrs/zustand
pnpm exec expo install zustand

# https://docs.expo.dev/ui-programming/react-native-toast/
pnpm exec expo install react-native-root-toast
```

## Troubleshooting Log

* VirtualizedList: You have a large list that is slow to update
  - https://stackoverflow.com/questions/44743904
* EXPO useEffect not called
  - https://stackoverflow.com/questions/72181822

## References

### React Native Expo

* You’re doing React Native Routing wrong - Expo File-Based Routing
  - https://www.youtube.com/watch?v=RglRiycD0oQ
* Build EVERY Layout with Expo Router
  - https://www.youtube.com/watch?v=IhzrgITqOWE
* Build a Full-stack E-Commerce app using React Native
  - https://www.youtube.com/watch?v=3tobiO8zDDA
  - https://github.com/Galaxies-dev/react-native-ecommerce
* Expo Icons
  - https://icons.expo.fyi/Index

### Supabase

* Supabase
  - https://supabase.com/docs/guides/getting-started/tutorials/with-expo-react-native
* Supabase transaction
  - https://techracho.bpsinc.jp/ecn/2023_06_01/130453
* Supabaseのデータベースを使うときに役立つ情報
  - https://qiita.com/kabochapo/items/26b1bb753116a6904664

## Upgrade

* official doc
  - https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/
* How do I update npm packages in Expo
  - https://stackoverflow.com/questions/66498615
* other resources
  - https://forums.expo.dev/t/how-to-downgrade-all-npm-packages-to-compatible-versions-after-upgrading-all-dependencies/65939/3
  - https://starter.obytes.com/guides/upgrading-deps/

```bash
# upgrade pnpm
corepack prepare pnpm@8.14.1 --activate
```

```bash
# check project settings
pnpm dlx expo-doctor
# Didn't find any issues with the project!

# upgrade
pnpm dlx expo-cli upgrade
# ✔ Would you like to proceed? … yes
# ...
# 👏 Automated upgrade steps complete.

# check again
pnpm dlx expo-doctor
```

* when expo-doctor failed, the message shows the next command to fix

```bash
✔ Check Expo config for common issues
✔ Check package.json for common issues
✔ Check dependencies for packages that should not be installed directly
✔ Check for common project setup issues
✔ Check npm/ yarn versions
✔ Check Expo config (app.json/ app.config.js) schema
✖ Check that packages match versions required by installed Expo SDK
✔ Check for legacy global CLI installed locally
✔ Check that native modules do not use incompatible support packages
✔ Check that native modules use compatible support package versions for installed Expo SDK

Detailed check results:

Some dependencies are incompatible with the installed expo version:
  react-native@0.72.5 - expected version: 0.72.6
Your project may not work correctly until you install the correct versions of the packages.
Fix with: npx expo install --fix
Found outdated dependencies
Advice: Use 'npx expo install --check' to review and upgrade your dependencies.

One or more checks failed, indicating possible issues with the project.
```

```bash
pnpm dlx expo install --check
# Some dependencies are incompatible with the installed expo version:
#   react-native@0.72.5 - expected version: 0.72.6
# Your project may not work correctly until you install the correct versions of the packages.
# Fix with: npx expo install --fix
# ✔ Fix dependencies? … yes
# › Installing 1 SDK 49.0.0 compatible native module using pnpm

# check again
pnpm dlx expo-doctor
# Didn't find any issues with the project!
```

* Note: `--fix-dependencies` seems to be old and no longer works
  - https://stackoverflow.com/questions/75977890

```bash
# pnpm dlx expo-doctor --fix-dependencies
```
