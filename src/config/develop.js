let http = '';
const env = process.env.NODE_ENV;
switch (env) {
    case 'test': {
        http = 'http://47.114.135.205:9998';
        break;
    }
    case 'test-ha': {
        http = 'http://10.8.3.193:9998';
        break;
    }
    default: {
        http = 'https://www.ja-zc.com/tycar';
        // http = 'http://47.92.74.122/tycar';
        break;
    }
}
module.exports = {
    http,
}