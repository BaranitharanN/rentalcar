const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development", // only enable in production
});

module.exports = withPWA({
  // other config
});
