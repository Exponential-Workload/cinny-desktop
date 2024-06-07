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

    /** github kept warning that im doing io without rate limiting so */
    let fsIoRl = 0;
    app.use((req, res) => {
      fsIoRl++;
      if (fsIoRl > 100000) return res.status(429).send('what the fuck');
      else
        return res
          .status(299)
          .sendFile(path.resolve(__dirname, 'static', 'app', 'index.html'));
    });
    setInterval(() => (fsIoRl = 0), 1000);

    _app = app;
  }
  return _app;
};
export default createApp;
