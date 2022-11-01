// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

const { withSentryConfig } = require("@sentry/nextjs");
const path = require("path");

// To run `yarn analyze` uncomment the respective lines:
// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });

const moduleExports = {
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    infura: "https://cloudflare-eth.com/",
    ethRPC: "https://cloudflare-eth.com/",
    polygonRPC: "https://polygon-rpc.com",
    Fortmatic: "pk_live_3754096A894BEFE4",
    Portis: "8f879477-6443-4f75-8e94-b44aee86a9f7",
  },
  async rewrites() {
    return [
      {
        source: "/jars",
        destination: "/farms",
      },
    ];
  },
  webpack5: true,
  webpack(config, context) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
};

const SentryWebpackPluginOptions = {};

// module.exports = withBundleAnalyzer(moduleExports);
module.exports = moduleExports;
