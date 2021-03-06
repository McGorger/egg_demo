// /* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1656075037116_4026';

  // add your middleware config here
  

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1:27017/end',
      options: {
        useUnifiedTopology: true
      },
      plugins: [],
    },
  };
  config.security = {
    csrf: {
      enable: false
    }
  }
  config.jwt = {
    secret: 'd2870eee-431e-4dce-9858-aeb09bd9de07',
    expiresIn: '1d'
  }
  config.middleware = [
    'errorHandler'
  ]
  return {
    ...config,
    ...userConfig,
  };
};
