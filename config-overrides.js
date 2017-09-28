const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function overrides(config, env) {
    config = injectBabelPlugin(['import', { libraryName: 'antd', style: 'css' }], config);
    return config;
};