
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['9tXqpW9VF5P6CU7w7wqKtA'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  