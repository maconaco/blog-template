// const https = require('https')
// const proxy = require('http-proxy-middleware')
import cookie from 'cookie';
import express from 'express';
import next from 'next';
import proxy from 'http-proxy-middleware';
import { parse } from 'url';


const app = next({
  dev: process.env.NODE_ENV !== 'production',
  conf: {
    experimental: {
      reactRefresh: true
    }
  }
});
const handle = app.getRequestHandler();

(async (): Promise<void> => {
  await app.prepare();
  const server = express();
  server.use(proxy('/api/**', {
    target: 'https://higherkindpud.microcms.io',
    changeOrigin: true,
    pathRewrite: { '/api': '/api/v1' },
    onProxyReq: (proxyReq, req): void => {
      const cookie_ = req.headers.cookie;
      if (typeof cookie_ === 'string') {
        const tokenEscaped = cookie.parse(cookie_).token as string;
        const token = unescape(tokenEscaped);
        return proxyReq.setHeader('authorization', `Bearer ${token}`);
      }
    },
  })
  );
  // enhance maximum request size.(for video)
  server.use(express.json({ limit: '10mb' }));
  // handle nextjs routing
  server.all('*', (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  await server.listen(8080);
  console.log(`Ready on http://localhost:${8080}`); // eslint-disable-line no-console
})();

/**
 * HTTPS対応
 *

const options = {
  key: fs.readFileSync('private/key.pem'),
  cert: fs.readFileSync('private/cert.pem')
}

app.prepare().then(() => {
  https
    .createServer(options, (req, res) => {
      const parsedUrl = parse(req.url, true)

      handle(req, res, parsedUrl)
    })
    .listen(process.env.PORT, err => {
      if (err) throw err
      // eslint-disable-next-line no-console
      console.log(`Ready on ${process.env.FRONT_URL}`)
      console.log(`Set API: ${process.env.API_URL}`)
    })
})*/
