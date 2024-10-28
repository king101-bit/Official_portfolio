import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Set your GitHub username and repository name
const GITHUB_USERNAME = 'king101-bit';
const GITHUB_REPO = 'Official_portfolio';

export default defineConfig({
  plugins: [react()],
  base: `https://${GITHUB_USERNAME}.github.io/${GITHUB_REPO}/`,
});
