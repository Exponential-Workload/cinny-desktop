import path from 'path';
import express from 'express';
let _app: ReturnType<typeof express> | undefined = undefined;
export const createApp = () => {
  if (typeof _app === 'undefined') {
    // Create app here | DO NOT CALL .listen()!!
    const app = express();
    app.use(
      express.static(path.resolve(__dirname, 'static/app'), {
        index: 'index.html',
      }),
    ); // see webpack main config
    app.use(
      express.static(path.resolve(__dirname, 'static'), {
        index: 'index.html',
      }),
    ); // see webpack main config

    app.use((req, res) =>
      res
        .status(299)
        .sendFile(path.resolve(__dirname, 'static', 'app', 'index.html')),
    );

    _app = app;
  }
  return _app;
};
export default createApp;
