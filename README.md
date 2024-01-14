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
# 10.3.0
pnpm --version
# 8.14.1

# install packages
pnpm install --frozen-lockfile
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
pnpm run ios -c
pnpm run android -c
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

```bash
corepack prepare pnpm@8.14.1 --activate

# check
pnpm outdated

# upgrade
pnpm update
```
