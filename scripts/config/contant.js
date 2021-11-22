const path = require('path');

const PROJECT_PATH = path.resolve(__dirname, '../../');
const PROJECT_NAME = path.parse(PROJECT_PATH).name

// true: 测试、false: 生产
const isDev = process.env.NODE_ENV !== 'production'

const SERVER_HOST = 'lyf.sankuai.com' //'127.0.0.1' //'lyf.sankuai.com'
const SERVER_PORT = '9000'

module.exports = {
  PROJECT_PATH,
  PROJECT_NAME,
  isDev,
  SERVER_HOST,
  SERVER_PORT
}