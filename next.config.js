const withPlugins = require('next-compose-plugins');

const config = {
    future: {
        webpack5: true,
    },
};

module.exports = withPlugins([], config);
