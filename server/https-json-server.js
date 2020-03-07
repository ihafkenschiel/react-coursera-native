// https-json-server.js
// Run with: node https-json-server.js

// Generate SSL keys: openssl req -nodes -new -x509 -keyout server.key -out server.cert

const jsonServer = require("json-server");
const https = require("https");
const path = require("path");
const fs = require("fs");

const server = jsonServer.create();
const router = jsonServer.router('db.json');
server.use(router);

const keyFile = path.join(__dirname, 'server.key');
const certFile = path.join(__dirname, 'server.cert');

https
  .createServer(
    {
      key: fs.readFileSync(keyFile),
      cert: fs.readFileSync(certFile),
    },
    server
  )
  .listen(3001, () => {
    console.log(
      'Go to https://localhost:3001/'
    );
  });
