const http = require('http');
const fs = require('fs');
const path = require('path');

const START_PORT = parseInt(process.env.PORT, 10) || 3000;

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.xml': 'application/xml; charset=UTF-8',
  '.txt': 'text/plain; charset=UTF-8',
  '.webmanifest': 'application/manifest+json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
  let reqUrl = req.url.split('?')[0];
  let safePath = path.normalize(decodeURI(reqUrl)).replace(/^(\.\.[\/\\])+/, '');
  
  if (safePath === '/' || safePath === '\\') {
    safePath = '/index.html';
  }

  const filePath = path.resolve(__dirname, '.' + (safePath.startsWith('/') ? safePath : '/' + safePath));

  // Security: prevent directory traversal outside root directory and block hidden/sensitive files (.git, .env)
  const isOutsideRoot = !filePath.startsWith(__dirname);
  const isSensitive = filePath.slice(__dirname.length).split(path.sep).some(part => part.startsWith('.git') || part.startsWith('.env'));

  if (isOutsideRoot || isSensitive) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=UTF-8' });
    res.end('403 Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      const notFoundPath = path.join(__dirname, '404.html');
      fs.readFile(notFoundPath, (e404, content404) => {
        if (!e404) {
          res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
          res.end(content404);
        } else {
          res.writeHead(404, { 'Content-Type': 'text/plain; charset=UTF-8' });
          res.end('404 Not Found');
        }
      });
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (readErr, content) => {
      if (readErr) {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=UTF-8' });
        res.end('500 Internal Server Error');
        return;
      }

      res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': 'no-cache'
      });
      res.end(content);
    });
  });
});

function listen(port) {
  // Bind exclusively to 127.0.0.1 (localhost) to prevent external local network access
  server.listen(port, '127.0.0.1', () => {
    console.log(`====================================================`);
    console.log(`🚀 UiA Case Club Website is live locally!`);
    console.log(`🌐 Localhost URL: http://localhost:${port}`);
    console.log(`📍 University of Agder, Kristiansand`);
    console.log(`====================================================`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} in use, trying port ${port + 1}...`);
      server.close();
      listen(port + 1);
    } else {
      console.error('Server error:', err);
    }
  });
}

listen(START_PORT);

