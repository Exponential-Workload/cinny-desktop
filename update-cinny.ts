#!/usr/bin/env ts-node
import {
  existsSync,
  readFileSync,
  rmSync,
  cpSync,
  mkdirSync,
  createWriteStream,
} from 'fs';
import { z } from 'zod';
import util from 'util';
import * as tar from 'tar';
import { Readable } from 'stream';
import path from 'path';
import { tmpdir } from 'os';
import { mkdir, writeFile } from 'fs/promises';
import JSZip from 'jszip';

if (
  existsSync('.cinny/expire-artifact-date') &&
  new Date(
    readFileSync('.cinny/expire-artifact-date', 'utf-8').split('\n')[1],
  ).getTime() > Date.now()
) {
  rmSync('.cinny', {
    recursive: true,
    force: true,
  });
  console.log('Cinny Artifact Expired, re-downloading...');
}

let srcDir = existsSync('.cinny')
  ? '.cinny'
  : existsSync('cinny-dist')
  ? readFileSync('cinny-dist', 'utf-8')
  : 'DL_ARTIFACT';

(async () => {
  if (srcDir === 'DL_ARTIFACT' || process.env.FORCE_REBUILD) {
    const stable = process.env.STABLE_CINNY;
    console.log(
      `Downloading ${stable ? 'Stable/Release' : 'Latest'} cinny-static.tar.gz`,
    );

    const tgz = Buffer.from(
      await fetch(
        stable
          ? 'https://github.com/Exponential-Workload/cinny-desktop/releases/latest/download/cinny-static.tar.gz'
          : 'https://github.com/Exponential-Workload/cinny-desktop/archive/refs/heads/cinny-builds.tar.gz',
      ).then(v => {
        if (!v.ok)
          throw new Error(
            `Failed to download cinny; got ${util.format(
              v,
            )} from the release & couldn't find an artifact - Please build cinny yourself; see the README.`,
          );
        return v.arrayBuffer();
      }),
    );

    const tgzPath = path.join(tmpdir(), 'artifact.tgz');
    console.log('Writing it to', tgzPath);
    await writeFile(tgzPath, tgz);

    rmSync('.cinny', {
      recursive: true,
      force: true,
    });
    mkdirSync('.cinny', {
      recursive: true,
    });

    console.log('Extracting to .cinny');
    await tar.x({
      strip: stable ? 1 : 0,
      gzip: true,
      cwd: path.join(process.cwd(), '.cinny'),
      file: tgzPath,
    });
    rmSync(tgzPath);
    srcDir = '.cinny';

    const expires = Date.now() + 1000 * 60 * 60 * 24;

    const expStr = new Date(expires).toISOString();
    await writeFile('.cinny/expire-artifact-date', expStr);
    console.info('Downloaded Cinny! Next download will occur on', expStr);
  }
  rmSync('src/static/app', {
    recursive: true,
    force: true,
  });
  cpSync(srcDir, 'src/static/app', {
    recursive: true,
  });
})();
