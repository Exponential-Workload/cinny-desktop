import type { Configuration } from 'webpack';
import CopyPlugin from 'copy-webpack-plugin';
import { rules } from './webpack.rules';
import path from 'path';

export const mainConfig: Configuration = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: './src/index.ts',
  // Put your normal webpack config below here
  module: {
    rules,
  },
  resolve: {
    fallback: {
      fs: false,
      tls: false,
      net: false,
      path: false,
      zlib: false,
      http: false,
      https: false,
      stream: false,
      crypto: false,
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/renderer-app/'),
          to: path.resolve(__dirname, '.webpack/renderer/main_window'),
          context: 'src/renderer-app/',
        },
        {
          from: path.resolve(__dirname, 'src/static/'),
          to: path.resolve(__dirname, '.webpack/main/static'),
          context: 'src/static/',
        }, // if u wanna serve static content from a new folder "src/app"
        {
          from: path.resolve(__dirname, 'package.json'),
          to: path.resolve(__dirname, '.webpack/main/package.json'),
          context: '.',
        }, // if u wanna serve static content from a new folder "src/app"
      ],
    }),
  ],
};
