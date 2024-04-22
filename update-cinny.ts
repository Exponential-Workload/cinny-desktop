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

const bufferToStream = (buffer: Buffer): Readable => {
  const stream = new Readable();
  stream.push(buffer);
  stream.push(null); // Indicate end of stream
  return stream;
};

(async () => {
  if (srcDir === 'DL_ARTIFACT' || process.env.FORCE_REBUILD) {
    const githubWorkflowSchema = z.object({
      total_count: z.number(),
      workflow_runs: z.array(
        z.object({
          id: z.number(),
          name: z.string(),
          node_id: z.string(),
          head_branch: z.string(),
          head_sha: z.string(),
          path: z.string(),
          display_title: z.string(),
          run_number: z.number(),
          event: z.string(),
          status: z.string(),
          conclusion: z.string().or(z.null()),
          workflow_id: z.number(),
          check_suite_id: z.number(),
          check_suite_node_id: z.string(),
          url: z.string(),
          html_url: z.string(),
          pull_requests: z.array(z.unknown()),
          created_at: z.string(),
          updated_at: z.string(),
          actor: z.any(),
          run_attempt: z.number(),
          run_started_at: z.string(),
          jobs_url: z.string(),
          logs_url: z.string(),
          check_suite_url: z.string(),
          artifacts_url: z.string(),
          cancel_url: z.string(),
          rerun_url: z.string(),
          previous_attempt_url: z.null(),
          workflow_url: z.string(),
          head_commit: z
            .object({
              id: z.string(),
              tree_id: z.string(),
              message: z.string(),
              timestamp: z.string(),
              author: z.object({ name: z.string(), email: z.string() }),
              committer: z.object({ name: z.string(), email: z.string() }),
            })
            .or(z.any()),
          repository: z.object({
            id: z.number(),
            node_id: z.string(),
            name: z.string(),
            full_name: z.string(),
            private: z.boolean(),
            owner: z.object({
              login: z.string(),
              id: z.number(),
              node_id: z.string(),
              avatar_url: z.string(),
              gravatar_id: z.string(),
              url: z.string(),
              html_url: z.string(),
              followers_url: z.string(),
              following_url: z.string(),
              gists_url: z.string(),
              starred_url: z.string(),
              subscriptions_url: z.string(),
              organizations_url: z.string(),
              repos_url: z.string(),
              events_url: z.string(),
              received_events_url: z.string(),
              type: z.string(),
              site_admin: z.boolean(),
            }),
            html_url: z.string(),
            description: z.string(),
            fork: z.boolean(),
            url: z.string(),
            forks_url: z.string(),
            keys_url: z.string(),
            collaborators_url: z.string(),
            teams_url: z.string(),
            hooks_url: z.string(),
            issue_events_url: z.string(),
            events_url: z.string(),
            assignees_url: z.string(),
            branches_url: z.string(),
            tags_url: z.string(),
            blobs_url: z.string(),
            git_tags_url: z.string(),
            git_refs_url: z.string(),
            trees_url: z.string(),
            statuses_url: z.string(),
            languages_url: z.string(),
            stargazers_url: z.string(),
            contributors_url: z.string(),
            subscribers_url: z.string(),
            subscription_url: z.string(),
            commits_url: z.string(),
            git_commits_url: z.string(),
            comments_url: z.string(),
            issue_comment_url: z.string(),
            contents_url: z.string(),
            compare_url: z.string(),
            merges_url: z.string(),
            archive_url: z.string(),
            downloads_url: z.string(),
            issues_url: z.string(),
            pulls_url: z.string(),
            milestones_url: z.string(),
            notifications_url: z.string(),
            labels_url: z.string(),
            releases_url: z.string(),
            deployments_url: z.string(),
          }),
          head_repository: z.object({
            id: z.number(),
            node_id: z.string(),
            name: z.string(),
            full_name: z.string(),
            private: z.boolean(),
            owner: z.object({
              login: z.string(),
              id: z.number(),
              node_id: z.string(),
              avatar_url: z.string(),
              gravatar_id: z.string(),
              url: z.string(),
              html_url: z.string(),
              followers_url: z.string(),
              following_url: z.string(),
              gists_url: z.string(),
              starred_url: z.string(),
              subscriptions_url: z.string(),
              organizations_url: z.string(),
              repos_url: z.string(),
              events_url: z.string(),
              received_events_url: z.string(),
              type: z.string(),
              site_admin: z.boolean(),
            }),
            html_url: z.string(),
            description: z.string(),
            fork: z.boolean(),
            url: z.string(),
            forks_url: z.string(),
            keys_url: z.string(),
            collaborators_url: z.string(),
            teams_url: z.string(),
            hooks_url: z.string(),
            issue_events_url: z.string(),
            events_url: z.string(),
            assignees_url: z.string(),
            branches_url: z.string(),
            tags_url: z.string(),
            blobs_url: z.string(),
            git_tags_url: z.string(),
            git_refs_url: z.string(),
            trees_url: z.string(),
            statuses_url: z.string(),
            languages_url: z.string(),
            stargazers_url: z.string(),
            contributors_url: z.string(),
            subscribers_url: z.string(),
            subscription_url: z.string(),
            commits_url: z.string(),
            git_commits_url: z.string(),
            comments_url: z.string(),
            issue_comment_url: z.string(),
            contents_url: z.string(),
            compare_url: z.string(),
            merges_url: z.string(),
            archive_url: z.string(),
            downloads_url: z.string(),
            issues_url: z.string(),
            pulls_url: z.string(),
            milestones_url: z.string(),
            notifications_url: z.string(),
            labels_url: z.string(),
            releases_url: z.string(),
            deployments_url: z.string(),
          }),
        }),
      ),
    });

    const allRuns = await fetch(
      // URL found from https://api.github.com/repos/Exponential-Workload/cinny-desktop/actions/workflows {workflow.url}/runs?branch=master
      'https://api.github.com/repos/Exponential-Workload/cinny-desktop/actions/workflows/80371142/runs?branch=master',
    )
      .then(v => v.json())
      .then(v =>
        githubWorkflowSchema.parseAsync(v).catch(e => {
          console.warn('Validation Error', e, 'Continuing anyway');
          return v as never;
        }),
      );
    console.log('Got', allRuns.total_count, 'total runs');

    const desiredRuns = allRuns.workflow_runs
      .filter(v => ['workflow_dispatch', 'schedule'].includes(v.event))
      .filter(v => v.status === 'completed')
      .filter(v => v.conclusion === 'success')
      .sort(
        (x, y) =>
          new Date(x.run_started_at).getTime() -
          new Date(y.run_started_at).getTime(),
      );
    const latestDesired = desiredRuns[desiredRuns.length - 1];

    // artifact expires in a day
    const expires = Date.now() + 1000 * 60 * 60 * 24;

    const artfacts = await fetch(latestDesired.artifacts_url)
      .then(v => v.json())
      .then(v =>
        z
          .object({
            total_count: z.number(),
            artifacts: z.array(
              z.object({
                id: z.number(),
                node_id: z.string(),
                name: z.string(),
                size_in_bytes: z.number(),
                url: z.string(),
                archive_download_url: z.string(),
                expired: z.boolean(),
                created_at: z.coerce.date(),
                updated_at: z.coerce.date(),
                expires_at: z.coerce.date(),
              }),
            ),
          })
          .parseAsync(v),
      );
    const nonExpiredArtifacts = artfacts.artifacts.filter(
      v => Date.now() < v.expires_at.getTime() && !v.expired,
    );
    if (
      artfacts.total_count === 0 ||
      nonExpiredArtifacts.length === 0 ||
      process.env.FORCE_RELEASE_CINNY
    ) {
      if (!process.env.FORCE_RELEASE_CINNY)
        console.warn(
          new Error(
            "Artifacts in latest build have expired! Please build cinny manually.\nFalling back to the latest release's (this is bad! build cinny yourself; see the readme!)",
          ),
        );
      console.log('Downloading cinny-static.tar.gz');
      const tgz = Buffer.from(
        await fetch(
          'https://github.com/Exponential-Workload/cinny-desktop/releases/latest/download/cinny-static.tar.gz',
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
        strip: 0,
        gzip: true,
        cwd: path.join(process.cwd(), '.cinny'),
        file: tgzPath,
      });
      rmSync(tgzPath);
    } else {
      const buildArti = nonExpiredArtifacts.find(v => v.name === 'cinny-build');
      if (!buildArti)
        throw new Error('Found artifacts but none had the name cinny-build!');

      // const zipFile = Buffer.from(
      //   await (await fetch(buildArti.archive_download_url)).arrayBuffer(),
      // );

      // hotfix because github is bad and doesnt let me make artifacts publicly downloadable:
      const zipFile = Buffer.from(
        await (await fetch(buildArti.archive_download_url)).arrayBuffer(), // todo: use new branch
      );

      const zipPath = path.join(tmpdir(), 'artifact.zip');
      console.log('Writing it to', zipPath);
      await writeFile(zipPath, zipFile);

      const zip = await JSZip.loadAsync(zipPath, {});

      const promises = [] as Promise<any>[];

      for (const filename of Object.keys(zip.files)) {
        const content = await zip.files[filename].async('nodebuffer');
        const destPath = path.resolve('.cinny', filename);

        await mkdir(path.dirname(destPath), { recursive: true });

        const stream = bufferToStream(content);
        const writeStream = createWriteStream(destPath);
        stream.pipe(writeStream);
        promises.push(
          new Promise((resolve, reject) => {
            stream.on('end', resolve);
            stream.on('error', reject);
          }),
        );
      }

      await Promise.all(promises);
    }
    srcDir = '.cinny';

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
