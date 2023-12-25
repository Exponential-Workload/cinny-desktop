const { execSync } = require("child_process");

execSync('electron-forge start', {
  stdio: 'inherit',
  cwd: process.cwd(),
  env: {
    ...process.env,
    NODE_ENV: 'development'
  },
})