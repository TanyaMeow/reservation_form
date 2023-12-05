// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api-host',
    createProxyMiddleware({
      target: "https://dev.manufaqtury.com",
      changeOrigin: true,
      pathRewrite: { '^/api-host': '/' },
    })
  );
};
