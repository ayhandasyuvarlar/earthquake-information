/** @type {import('next').NextConfig} */

/** @type {import('next').NextConfig} */
const { dependencies } = require("./package.json");

const transpilePackages = Object.keys(dependencies || []).filter((dependency) =>
  dependency.startsWith("@my-root-project/")
);
const nextConfig = {
  experimental: {
    appDir: true,
    transpilePackages
  },
}

module.exports = nextConfig
