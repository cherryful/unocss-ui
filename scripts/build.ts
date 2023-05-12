import { execSync } from 'node:child_process'

execSync('pnpm --filter unocss-ui build')

console.log('Build complete!')
