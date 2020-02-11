const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/crud',
    proxy({
      target: 'http://localhost:3000',
      changeOrigin: true,
    })
  );
};