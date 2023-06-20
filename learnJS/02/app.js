import express from 'express';
import { initialize } from 'express-openapi';
import v1WorldsService from './api-v1/services/worldsService.js';
import v1ApiDoc from './api-v1/api-doc.js';

const app = express();
initialize({
  app,
  // NOTE: If using yaml you can provide a path relative to process.cwd() e.g.
  // apiDoc: './api-v1/api-doc.yml',
  apiDoc: v1ApiDoc,
  dependencies: {
    worldsService: v1WorldsService
  },
  paths: './api-v1/paths'
});

app.get("/test", (req, res) => {
  console.log("hello");
  res.send("Hello");
})

app.listen(3000);
