/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1550213086228_1468';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    mysql: {
      client: {
        host: '127.0.0.1',
        port: '3306',
        user: 'root',
        password: 'weixiang1999',
        database: 'bird_server',
      },
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};