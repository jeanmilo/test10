// next.config.mjs
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woff2|ttf)$/,
      type: 'asset/resource'
    })
    return config
  }
}

export default nextConfig