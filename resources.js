const { parse } = require('url')
const next = require('next')

// currently non-dev mode throws errors about missing .next/BUILD_ID and manifest file
const dev = true;//process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: __dirname })
const handle = app.getRequestHandler()

app.prepare(); // This returns a promise, we could maybe await this
server.http((request) => {
  const req = request._nodeRequest;
  const res = request._nodeResponse;
  // Be sure to pass `true` as the second argument to `url.parse`.
  // This tells it to parse the query portion of the URL.
  const parsedUrl = parse(req.url, true)
  return handle(req, res, parsedUrl)
});
