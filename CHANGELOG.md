# Changelog

## v1.1.5

[compare changes](https://github.com/Exponential-Workload/cinny-desktop/compare/v1.1.4...v1.1.5)

### 🩹 Fixes

- Use @vercel/webpack-asset-relocator-loader@1.7.3 ([e8088e0](https://github.com/Exponential-Workload/cinny-desktop/commit/e8088e0))

### ❤️ Contributors

- Expo <expo@expo.moe>

## v1.1.4

[compare changes](https://github.com/Exponential-Workload/cinny-desktop/compare/v1.1.3...v1.1.4)

### 🏡 Chore

- Split into 2 workflows; 1 dev, 1 prod ([e55a883](https://github.com/Exponential-Workload/cinny-desktop/commit/e55a883))
- Upgrade pnpm/action-setup to v4 ([3936721](https://github.com/Exponential-Workload/cinny-desktop/commit/3936721))
- **deps-dev:** Bump electron from 30.0.2 to 30.0.8 ([#36](https://github.com/Exponential-Workload/cinny-desktop/pull/36))
- Upgrade deps ([847517e](https://github.com/Exponential-Workload/cinny-desktop/commit/847517e))

### ❤️ Contributors

- Expo <expo@expo.moe>

## v1.1.3

[compare changes](https://github.com/Exponential-Workload/cinny-desktop/compare/v1.1.2...v1.1.3)

### 🤖 CI

- The artifact name is cinny-build ([91550e8](https://github.com/Exponential-Workload/cinny-desktop/commit/91550e8))

### ❤️ Contributors

- Expo <expo@expo.moe>

## v1.1.2

[compare changes](https://github.com/Exponential-Workload/cinny-desktop/compare/v1.1.0...v1.1.2)

### 🚀 Enhancements

- Push to cinny-builds branch ([51ca93f](https://github.com/Exponential-Workload/cinny-desktop/commit/51ca93f))
- Download from the new branch :3 ([d890ab1](https://github.com/Exponential-Workload/cinny-desktop/commit/d890ab1))
- Give a complete message ([0cead68](https://github.com/Exponential-Workload/cinny-desktop/commit/0cead68))
- Fuck it, upgrade deps when building to the branch ([4245b75](https://github.com/Exponential-Workload/cinny-desktop/commit/4245b75))
- Also push plain cinny to output ([41cd1cf](https://github.com/Exponential-Workload/cinny-desktop/commit/41cd1cf))

### 🩹 Fixes

- Use the right repo ([ab90470](https://github.com/Exponential-Workload/cinny-desktop/commit/ab90470))
- Only dispatch & schedule should push ([d82adc2](https://github.com/Exponential-Workload/cinny-desktop/commit/d82adc2))
- Dont attempt to remove hidden files ([148319b](https://github.com/Exponential-Workload/cinny-desktop/commit/148319b))
- Use ref cinny-builds ([1c3b10d](https://github.com/Exponential-Workload/cinny-desktop/commit/1c3b10d))
- Move files from dir ([05adcff](https://github.com/Exponential-Workload/cinny-desktop/commit/05adcff))
- Download tgz's always and use branch ([508057e](https://github.com/Exponential-Workload/cinny-desktop/commit/508057e))
- Skip checkout when not pushing ([d156a4a](https://github.com/Exponential-Workload/cinny-desktop/commit/d156a4a))
- Swap strip order ([8f8495c](https://github.com/Exponential-Workload/cinny-desktop/commit/8f8495c))
- Only commit on changes ([8d8669e](https://github.com/Exponential-Workload/cinny-desktop/commit/8d8669e))
- Dont run build on cinny-builds ([e1658bd](https://github.com/Exponential-Workload/cinny-desktop/commit/e1658bd))
- Only call git add if changes ([5041da7](https://github.com/Exponential-Workload/cinny-desktop/commit/5041da7))
- Ignore errors in commit ([6809f05](https://github.com/Exponential-Workload/cinny-desktop/commit/6809f05))
- Use cinny repo for msg commit ids ([3a6b9f3](https://github.com/Exponential-Workload/cinny-desktop/commit/3a6b9f3))
- Just normal upgrade, fuck npm ([5104d3d](https://github.com/Exponential-Workload/cinny-desktop/commit/5104d3d))

### 🏡 Chore

- Tmp ignore ([a5f42a2](https://github.com/Exponential-Workload/cinny-desktop/commit/a5f42a2))
- Upgrade in dev, and never upload dev artifacts to cinny-build ([6252cc7](https://github.com/Exponential-Workload/cinny-desktop/commit/6252cc7))
- **release:** V1.1.1 ([72616a5](https://github.com/Exponential-Workload/cinny-desktop/commit/72616a5))
- **deps-dev:** Bump tar from 7.0.1 to 7.1.0 ([#24](https://github.com/Exponential-Workload/cinny-desktop/pull/24))
- **deps-dev:** Bump electron from 30.0.1 to 30.0.2 ([#26](https://github.com/Exponential-Workload/cinny-desktop/pull/26))
- **deps-dev:** Bump @types/node from 20.12.8 to 20.12.10 ([#28](https://github.com/Exponential-Workload/cinny-desktop/pull/28))

### 🤖 CI

- Hopefully get it working ([b82d7fd](https://github.com/Exponential-Workload/cinny-desktop/commit/b82d7fd))

### ❤️ Contributors

- Expo ([@Exponential-Workload](http://github.com/Exponential-Workload))

## v1.1.1

[compare changes](https://github.com/Exponential-Workload/cinny-desktop/compare/v1.1.0...v1.1.1)

### 🚀 Enhancements

- Make update-cinny download build artifacts when the developer has none, have CI build Cinny artifacts to the [`cinny-builds`](https://github.com/Exponential-Workload/cinny-desktop/tree/cinny-builds) branch ([ab90470](https://github.com/Exponential-Workload/cinny-desktop/commit/ab90470), [d82adc2](https://github.com/Exponential-Workload/cinny-desktop/commit/d82adc2), [148319b](https://github.com/Exponential-Workload/cinny-desktop/commit/148319b), [1c3b10d](https://github.com/Exponential-Workload/cinny-desktop/commit/1c3b10d), [05adcff](https://github.com/Exponential-Workload/cinny-desktop/commit/05adcff), [508057e](https://github.com/Exponential-Workload/cinny-desktop/commit/508057e), [d156a4a](https://github.com/Exponential-Workload/cinny-desktop/commit/d156a4a), [8f8495c](https://github.com/Exponential-Workload/cinny-desktop/commit/8f8495c), [8d8669e](https://github.com/Exponential-Workload/cinny-desktop/commit/8d8669e), [e1658bd](https://github.com/Exponential-Workload/cinny-desktop/commit/e1658bd), [5041da7](https://github.com/Exponential-Workload/cinny-desktop/commit/5041da7), [6809f05](https://github.com/Exponential-Workload/cinny-desktop/commit/6809f05), [3a6b9f3](https://github.com/Exponential-Workload/cinny-desktop/commit/3a6b9f3), [5104d3d](https://github.com/Exponential-Workload/cinny-desktop/commit/5104d3d), [6252cc7](https://github.com/Exponential-Workload/cinny-desktop/commit/6252cc7), [b82d7fd](https://github.com/Exponential-Workload/cinny-desktop/commit/b82d7fd), [0cead68](https://github.com/Exponential-Workload/cinny-desktop/commit/0cead68), [d890ab1](https://github.com/Exponential-Workload/cinny-desktop/commit/d890ab1), [51ca93f](https://github.com/Exponential-Workload/cinny-desktop/commit/51ca93f))
- Make the new [`cinny-builds`](https://github.com/Exponential-Workload/cinny-desktop/tree/cinny-builds) branch contain more up-to-date dependencies, assuming upstream isnt annoying with their semver ranges (i didnt check) ([4245b75](https://github.com/Exponential-Workload/cinny-desktop/commit/4245b75))

### ❤️ Contributors

- Expo <expo@expo.moe>

## v1.1.0

[compare changes](https://github.com/Exponential-Workload/cinny-desktop/compare/v1.0.12...v1.1.0)

### 🩹 Fixes

- Swap tar operation order ([f0c21be](https://github.com/Exponential-Workload/cinny-desktop/commit/f0c21be))
- **cinny:** Fallback to index.html ([e9cb986](https://github.com/Exponential-Workload/cinny-desktop/commit/e9cb986))
- Mark as private ([c595174](https://github.com/Exponential-Workload/cinny-desktop/commit/c595174))

### 🏡 Chore

- Move to fonts.arson.wtf ([9eb1354](https://github.com/Exponential-Workload/cinny-desktop/commit/9eb1354))
- **deps-dev:** Bump @electron-forge/cli from 7.3.1 to 7.4.0 ([#23](https://github.com/Exponential-Workload/cinny-desktop/pull/23))
- **deps-dev:** Bump @electron-forge/maker-flatpak from 7.3.1 to 7.4.0 ([#22](https://github.com/Exponential-Workload/cinny-desktop/pull/22))
- **deps-dev:** Bump @electron-forge/shared-types from 7.3.1 to 7.4.0 ([#19](https://github.com/Exponential-Workload/cinny-desktop/pull/19))
- Upgrade deps ([0aeaff5](https://github.com/Exponential-Workload/cinny-desktop/commit/0aeaff5))

### ❤️ Contributors

- Expo <expo@expo.moe>

## v1.0.12

[compare changes](https://github.com/Exponential-Workload/cinny-desktop/compare/v1.0.11...v1.0.12)

### 🚀 Enhancements

- Upgrade before install ([ff853c9](https://github.com/Exponential-Workload/cinny-desktop/commit/ff853c9))

### 🩹 Fixes

- Relase the cinny build used in the same build ([5e0d9d6](https://github.com/Exponential-Workload/cinny-desktop/commit/5e0d9d6))

### 🏡 Chore

- **deps-dev:** Bump @types/node from 20.11.30 to 20.12.2 ([#12](https://github.com/Exponential-Workload/cinny-desktop/pull/12))
- **deps-dev:** Bump electron from 29.1.5 to 29.1.6 ([#11](https://github.com/Exponential-Workload/cinny-desktop/pull/11))
- **deps-dev:** Bump css-loader from 6.10.0 to 7.0.0 ([#13](https://github.com/Exponential-Workload/cinny-desktop/pull/13))
- **deps-dev:** Bump @types/node from 20.12.2 to 20.12.5 ([#16](https://github.com/Exponential-Workload/cinny-desktop/pull/16))
- **deps-dev:** Bump electron from 29.1.6 to 29.3.0 ([#18](https://github.com/Exponential-Workload/cinny-desktop/pull/18))
- **deps-dev:** Bump typescript from 5.4.3 to 5.4.5 ([#17](https://github.com/Exponential-Workload/cinny-desktop/pull/17))
- Upgrade everything ([f51fab2](https://github.com/Exponential-Workload/cinny-desktop/commit/f51fab2))

### ❤️ Contributors

- Expo ([@Exponential-Workload](http://github.com/Exponential-Workload))

## v1.0.11

[compare changes](https://github.com/Exponential-Workload/cinny-desktop/compare/v1.0.10...v1.0.11)

### 🩹 Fixes

- Update workflows ([6b2f901](https://github.com/Exponential-Workload/cinny-desktop/commit/6b2f901))
- Bump pkg ([b910794](https://github.com/Exponential-Workload/cinny-desktop/commit/b910794))

### 🏡 Chore

- Upgrade deps ([c98792a](https://github.com/Exponential-Workload/cinny-desktop/commit/c98792a))
- Dependabot.yml moment ([7a1fc8b](https://github.com/Exponential-Workload/cinny-desktop/commit/7a1fc8b))

### ❤️ Contributors

- Exponential-Workload <cc@aaathats3as.com>
- Expo ([@Exponential-Workload](http://github.com/Exponential-Workload))

## v1.0.9

[compare changes](https://github.com/Exponential-Workload/cinny-desktop/compare/v1.0.8...v1.0.9)

### 🚀 Enhancements

- Account Switching

## v1.0.8

[compare changes](https://github.com/Exponential-Workload/cinny-desktop/compare/v1.0.7...v1.0.8)

### 🩹 Fixes

- Prefix with v ([128307b](https://github.com/Exponential-Workload/cinny-desktop/commit/128307b))

### ❤️ Contributors

- Exponential-Workload <cc@aaathats3as.com>

## v1.0.7

[compare changes](https://github.com/Exponential-Workload/cinny-desktop/compare/v1.0.6...v1.0.7)

### 🩹 Fixes

- Proper installation ([e74692d](https://github.com/Exponential-Workload/cinny-desktop/commit/e74692d))
- With -fsSL ([0fee7e4](https://github.com/Exponential-Workload/cinny-desktop/commit/0fee7e4))
- Chmod the install aswell ([57e34d7](https://github.com/Exponential-Workload/cinny-desktop/commit/57e34d7))
- Move it up ([b9f8d0c](https://github.com/Exponential-Workload/cinny-desktop/commit/b9f8d0c))
- Fix shit ([6945a24](https://github.com/Exponential-Workload/cinny-desktop/commit/6945a24))
- Call with setup desktop ([2dfba00](https://github.com/Exponential-Workload/cinny-desktop/commit/2dfba00))

### ❤️ Contributors

- Exponential-Workload <cc@aaathats3as.com>

## v1.0.6

[compare changes](https://github.com/Exponential-Workload/cinny-desktop/compare/v1.0.5...v1.0.6)

### 🩹 Fixes

- App id ([5193302](https://github.com/Exponential-Workload/cinny-desktop/commit/5193302))
- Get rid of buildidentifier ([3847e9b](https://github.com/Exponential-Workload/cinny-desktop/commit/3847e9b))
- Fully qualify main path ([06bb40e](https://github.com/Exponential-Workload/cinny-desktop/commit/06bb40e))
- Wm class as cinny desktop ([fa1f3e4](https://github.com/Exponential-Workload/cinny-desktop/commit/fa1f3e4))

### 🏡 Chore

- Call .setName ([e4bece2](https://github.com/Exponential-Workload/cinny-desktop/commit/e4bece2))

### ❤️ Contributors

- Exponential-Workload <cc@aaathats3as.com>

## v1.0.5

[compare changes](https://github.com/Exponential-Workload/cinny-desktop/compare/v1.0.4...v1.0.5)

### 🚀 Enhancements

- --setup-desktop ([60a4b86](https://github.com/Exponential-Workload/cinny-desktop/commit/60a4b86))
- Add .desktop file setup to docs ([0a598d1](https://github.com/Exponential-Workload/cinny-desktop/commit/0a598d1))

### 🩹 Fixes

- Use app.getpath ([8f85505](https://github.com/Exponential-Workload/cinny-desktop/commit/8f85505))
- Id stuff ([006c819](https://github.com/Exponential-Workload/cinny-desktop/commit/006c819))
- Copy to 2 dirs ([df00f42](https://github.com/Exponential-Workload/cinny-desktop/commit/df00f42))

### ❤️ Contributors

- Exponential-Workload <cc@aaathats3as.com>

## v1.0.4

[compare changes](https://github.com/Exponential-Workload/cinny-desktop/compare/v1.0.3...v1.0.4)

### 🚀 Enhancements

- Mention dev builds ([252b45c](https://github.com/Exponential-Workload/cinny-desktop/commit/252b45c))
- Moar icons ([1772812](https://github.com/Exponential-Workload/cinny-desktop/commit/1772812))
- Type pkg ([e85cc12](https://github.com/Exponential-Workload/cinny-desktop/commit/e85cc12))
- Use icons ([bffd033](https://github.com/Exponential-Workload/cinny-desktop/commit/bffd033))

### 🩹 Fixes

- Github says failing despite both not failign ([6b5056c](https://github.com/Exponential-Workload/cinny-desktop/commit/6b5056c))

### 🏡 Chore

- Rename release workflow ([f634cc9](https://github.com/Exponential-Workload/cinny-desktop/commit/f634cc9))
- Rename concurrency group ([ad89a53](https://github.com/Exponential-Workload/cinny-desktop/commit/ad89a53))
- Call setup node in build ([798332f](https://github.com/Exponential-Workload/cinny-desktop/commit/798332f))
- Default to 959 width ([3d38810](https://github.com/Exponential-Workload/cinny-desktop/commit/3d38810))
- Wip thing ([af7e21f](https://github.com/Exponential-Workload/cinny-desktop/commit/af7e21f))

### ❤️ Contributors

- Exponential-Workload <cc@aaathats3as.com>

## v1.0.3

[compare changes](https://github.com/Exponential-Workload/cinny-desktop/compare/v1.0.2...v1.0.3)

### 🩹 Fixes

- Clone prior to npm and pnpm ([308b366](https://github.com/Exponential-Workload/cinny-desktop/commit/308b366))

### 🏡 Chore

- Install cinny deps with npm for some reason this fixes build issues - i could prob configure an npmrc to get pnpm working but this also works ([93946d9](https://github.com/Exponential-Workload/cinny-desktop/commit/93946d9))

### ❤️ Contributors

- Exponential-Workload <cc@aaathats3as.com>

## v1.0.2

[compare changes](https://github.com/Exponential-Workload/cinny-desktop/compare/v1.0.1...v1.0.2)

### 🚀 Enhancements

- Issue templates ([5d074ac](https://github.com/Exponential-Workload/cinny-desktop/commit/5d074ac))
- Bug form ([d889101](https://github.com/Exponential-Workload/cinny-desktop/commit/d889101))
- Feature req ([d367e61](https://github.com/Exponential-Workload/cinny-desktop/commit/d367e61))
- New feature request form ([adec89a](https://github.com/Exponential-Workload/cinny-desktop/commit/adec89a))
- New checkbox for bug ([ec1a02b](https://github.com/Exponential-Workload/cinny-desktop/commit/ec1a02b))
- Also output a linux zip for those few ppl who dont use tar.gz's ([b8ce108](https://github.com/Exponential-Workload/cinny-desktop/commit/b8ce108))

### 🩹 Fixes

- Remove md files ([a7d3883](https://github.com/Exponential-Workload/cinny-desktop/commit/a7d3883))
- Add config ([8d5ee8d](https://github.com/Exponential-Workload/cinny-desktop/commit/8d5ee8d))
- Rephrase ([2791c38](https://github.com/Exponential-Workload/cinny-desktop/commit/2791c38))
- The images kinda look silly here ([59ebe9a](https://github.com/Exponential-Workload/cinny-desktop/commit/59ebe9a))

### 🏡 Chore

- Update ([48c907a](https://github.com/Exponential-Workload/cinny-desktop/commit/48c907a))
- Fix some stuff ([b292534](https://github.com/Exponential-Workload/cinny-desktop/commit/b292534))
- Improve the md ([eb91aa0](https://github.com/Exponential-Workload/cinny-desktop/commit/eb91aa0))
- Reword ([b5b575b](https://github.com/Exponential-Workload/cinny-desktop/commit/b5b575b))

### ❤️ Contributors

- Exponential-Workload <cc@aaathats3as.com>
- ExponentialWorkload

## v1.0.1

[compare changes](https://github.com/Exponential-Workload/cinny-desktop/compare/v1.0.0...v1.0.1)

### 🚀 Enhancements

- Half-decent README ([a3dbd3e](https://github.com/Exponential-Workload/cinny-desktop/commit/a3dbd3e))
- Readme image, license ([367acc7](https://github.com/Exponential-Workload/cinny-desktop/commit/367acc7))
- Add --license and --version ([3470920](https://github.com/Exponential-Workload/cinny-desktop/commit/3470920))

### 🩹 Fixes

- Rephrase notice, capitalize github ([95fe32b](https://github.com/Exponential-Workload/cinny-desktop/commit/95fe32b))

### 🏡 Chore

- Yap some more ([f202052](https://github.com/Exponential-Workload/cinny-desktop/commit/f202052))

### ❤️ Contributors

- Exponential-Workload <cc@aaathats3as.com>

## v1.0.0

[compare changes](https://github.com/Exponential-Workload/cinny-desktop/compare/v1.0.0-3...v1.0.0)

### 🏡 Chore

- Upgrade Deps ([ddc3447](https://github.com/Exponential-Workload/cinny-desktop/commit/ddc3447))

### ❤️ Contributors

- Exponential-Workload <cc@aaathats3as.com>

## v1.0.0-3

[compare changes](https://github.com/Exponential-Workload/cinny-desktop/compare/v1.0.0-2...v1.0.0-3)

### 🏡 Chore

- Trycatch the privelege escalation ([5d2c0ce](https://github.com/Exponential-Workload/cinny-desktop/commit/5d2c0ce))

### ❤️ Contributors

- Exponential-Workload <cc@aaathats3as.com>

## v1.0.0-2

[compare changes](https://github.com/Exponential-Workload/cinny-desktop/compare/v1.0.0-1...v1.0.0-2)

### 🩹 Fixes

- We usin cinny:// ([23eb6a6](https://github.com/Exponential-Workload/cinny-desktop/commit/23eb6a6))
- Prereleases should be 0.0.0 on windows ([5e13a8b](https://github.com/Exponential-Workload/cinny-desktop/commit/5e13a8b))
- Fix privelege api usage ([1bc373f](https://github.com/Exponential-Workload/cinny-desktop/commit/1bc373f))
- Fix privelege calls ([937e428](https://github.com/Exponential-Workload/cinny-desktop/commit/937e428))

### ❤️ Contributors

- Exponential-Workload <cc@aaathats3as.com>

## v1.0.0-1

[compare changes](https://github.com/Exponential-Workload/cinny-desktop/compare/v0.2.0...v1.0.0-1)

### 🩹 Fixes

- Dont hard exit ([a866aaf](https://github.com/Exponential-Workload/cinny-desktop/commit/a866aaf))
- Grant permission ([7202b18](https://github.com/Exponential-Workload/cinny-desktop/commit/7202b18))
- Changelogen had a stroke ([8d4c6ad](https://github.com/Exponential-Workload/cinny-desktop/commit/8d4c6ad))

### 🏡 Chore

- **release:** V1.0.0-0 ([b658550](https://github.com/Exponential-Workload/cinny-desktop/commit/b658550))
- **release:** V2.0.0-0 ([67e1d6c](https://github.com/Exponential-Workload/cinny-desktop/commit/67e1d6c))

### ❤️ Contributors

- Exponential-Workload <cc@aaathats3as.com>

## v1.0.0-0

[compare changes](https://github.com/Exponential-Workload/cinny-desktop/compare/v0.2.0...v1.0.0-0)

## v0.2.0

[compare changes](https://github.com/Exponential-Workload/cinny-desktop/compare/v0.1.0...v0.2.0)

### 🩹 Fixes

- Use asterisk for version ([6d45823](https://github.com/Exponential-Workload/cinny-desktop/commit/6d45823))

### ❤️ Contributors

- Exponential-Workload <cc@aaathats3as.com>

## v0.1.0

[compare changes](https://github.com/Exponential-Workload/cinny-desktop/compare/0.0.0...v0.1.0)

### 🚀 Enhancements

- Update checker ([a8772d1](https://github.com/Exponential-Workload/cinny-desktop/commit/a8772d1))
- Proper semver check ([71ee2b0](https://github.com/Exponential-Workload/cinny-desktop/commit/71ee2b0))
- Release script ([b825f98](https://github.com/Exponential-Workload/cinny-desktop/commit/b825f98))

### 🩹 Fixes

- Dont run build on master, as deploy calls it ([bffe68d](https://github.com/Exponential-Workload/cinny-desktop/commit/bffe68d))
- Rename window ([8ab9eb7](https://github.com/Exponential-Workload/cinny-desktop/commit/8ab9eb7))
- Rename log ([4e8e115](https://github.com/Exponential-Workload/cinny-desktop/commit/4e8e115))
- BUILD_FLATPAK env ([d730bf0](https://github.com/Exponential-Workload/cinny-desktop/commit/d730bf0))
- Create indexes before uploading ([96ccc23](https://github.com/Exponential-Workload/cinny-desktop/commit/96ccc23))
- On ubuntu, try to build flatpaks ([d7f5a58](https://github.com/Exponential-Workload/cinny-desktop/commit/d7f5a58))
- Call apt with sudo :rolling_eyes: ([f051370](https://github.com/Exponential-Workload/cinny-desktop/commit/f051370))
- Log version check result ([68e08b2](https://github.com/Exponential-Workload/cinny-desktop/commit/68e08b2))
- \_build ([5e9538c](https://github.com/Exponential-Workload/cinny-desktop/commit/5e9538c))

### 🏡 Chore

- Nvm, no flatpacks ig ([c45f4ae](https://github.com/Exponential-Workload/cinny-desktop/commit/c45f4ae))
- Remove 2 chars ([b6ef935](https://github.com/Exponential-Workload/cinny-desktop/commit/b6ef935))

### ❤️ Contributors

- Exponential-Workload <cc@aaathats3as.com>
