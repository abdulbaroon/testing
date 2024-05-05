const path = require("path");

module.exports = {
  i18n: {
    locales: ["en", "he"],
    defaultLocale: "en",
    localeDetection: false,
    localePath: path.resolve("./public/locales"),
  },
};
