/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const fs = require('fs');

const srcDir = fs.existsSync('.cinny')
  ? '.cinny'
  : fs.readFileSync('cinny-dist', 'utf-8');
fs.rmSync('src/static/app', {
  recursive: true,
  force: true,
});
fs.cpSync(srcDir, 'src/static/app', {
  recursive: true,
});
