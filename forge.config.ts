import type { ForgeConfig } from '@electron-forge/shared-types';
import { MakerSquirrel } from '@electron-forge/maker-squirrel';
import { MakerZIP } from '@electron-forge/maker-zip';
import { MakerDeb } from '@electron-forge/maker-deb';
import { MakerDMG } from '@electron-forge/maker-dmg';
import { MakerFlatpak } from '@electron-forge/maker-flatpak';
import { WebpackPlugin } from '@electron-forge/plugin-webpack';

import { mainConfig } from './webpack.main.config';
import { rendererConfig } from './webpack.renderer.config';

import semver from 'semver';
import { readFileSync } from 'fs-extra';
import path from 'path';

const pkg = JSON.parse(readFileSync('package.json', 'utf-8'));

const binaryName = 'Cinny';
const isPrerelease = (semver.parse(pkg.version)?.prerelease?.length ?? 0) !== 0;

const icoDir = path.resolve(__dirname, 'src/static/icons');
const icoBase = path.resolve(icoDir, 'cinny');
const winIcon = path.resolve(icoDir, 'cinny-256.ico');
const linuxIcon = path.resolve(icoDir, 'cinny-512.png');

const config: ForgeConfig = {
  buildIdentifier: isPrerelease ? 'prerelease' : 'release',
  packagerConfig: {
    executableName: binaryName,
    icon: icoBase,
    appBundleId: `moe.expo.cinny${isPrerelease ? '.pre' : ''}`,
    asar: !isPrerelease,
  },
  rebuildConfig: {},
  makers: [
    new MakerSquirrel({
      version: isPrerelease ? '0.0.0' : pkg.version,
      iconUrl: 'https://gh.expo.moe/cinny-desktop/src/static/icons/cinny.ico',
      setupIcon: winIcon,
      skipUpdateIcon: false,
    }),
    new MakerZIP({}, ['darwin', 'linux']),
    ...(process.env.BUILD_FLATPAK
      ? [
          new MakerFlatpak({
            options: {
              files: [],
              id: 'moe.expo.cinny',
              description:
                'A desktop application for Cinny, shipping with a local build of it',
              genericName: 'Chat',
              productName: 'Cinny Desktop',
              categories: ['Office', 'Network', 'InstantMessaging' as any],
              icon: linuxIcon,
            },
          }),
        ]
      : []),
    new MakerDeb({
      options: {
        bin: binaryName,
        icon: linuxIcon,
      },
    }),
    new MakerDMG({ format: 'ULFO' }),
  ],
  plugins: [
    new WebpackPlugin({
      mainConfig,
      renderer: {
        config: rendererConfig,
        entryPoints: [
          {
            html: './src/renderer-app/index.html',
            js: './src/renderer.ts',
            name: 'main_window',
            preload: {
              js: './src/preload.ts',
            },
          },
        ],
      },
    }),
  ],
};

export default config;
