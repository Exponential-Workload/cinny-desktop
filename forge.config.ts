// @ts-nocheck
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

const pkg = JSON.parse(readFileSync('package.json', 'utf-8'));

const binaryName = 'Cinny';

const config: ForgeConfig = {
  packagerConfig: {
    executableName: binaryName,
  },
  rebuildConfig: {},
  makers: [
    new MakerSquirrel({
      version: semver.parse(pkg.version)?.prerelease ? '0.0.0' : pkg.version,
    }),
    new MakerZIP({}, ['darwin', 'linux']),
    ...(process.env.BUILD_FLATPAK
      ? [
          new MakerFlatpak({
            options: {
              id: 'moe.expo.cinny',
              description:
                'A desktop application for Cinny, shipping with a local build of it',
              genericName: 'Chat',
              productName: 'Cinny Desktop',
              categories: ['Chat', 'Internet'],
            },
          }),
        ]
      : []),
    new MakerDeb({
      options: {
        bin: binaryName,
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
