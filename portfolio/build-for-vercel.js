// build-for-vercel.js
const { execSync } = require('child_process');

// Force reinstall with Linux platform
try {
  console.log('Cleaning node_modules...');
  execSync('rm -rf node_modules');
  
  console.log('Installing dependencies for Linux...');
  execSync('npm install --no-package-lock --platform=linux --arch=x64', 
    { env: { ...process.env, npm_config_platform: 'linux', npm_config_arch: 'x64' }});
  
  console.log('Building application...');
  execSync('npm run build');
} catch (error) {
  console.error(`Execution error: ${error.message}`);
  process.exit(1);
}