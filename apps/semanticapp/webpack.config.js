const { merge } = require('webpack-merge');
const path = require('path');

module.exports = (config, context) => {

  return merge(config, {
    resolve: {
      alias: {
        "../../theme.config$": path.join(__dirname, "src/semantic-ui/theme.config"),
        "../semantic-ui/site": path.join(__dirname, "src/semantic-ui/site")
      }
    }
  });
};
