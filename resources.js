const { parse } = require('url')
const next = require('next')
 
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: __dirname })
const handle = app.getRequestHandler()
 
app.prepare().then(() => {
  console.log('prepared')
  server.http(async (request) => {
    try {
      const req = request.nodeRequest;
      const res = request.nodeResponse;
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true)
      await handle(req, res, parsedUrl)
      return {
        done: true,
      }
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  });
});