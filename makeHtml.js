import fs from 'fs';
import { minify } from 'terser';

const { code } = await minify(fs.readFileSync('main.js', 'utf-8'));
const encoded = encodeURIComponent(code);

const html = `<!DOCTYPE html>
<html>
  <head>
    <title>Search in Longman</title>
  </head>
  <body>
    <p>
      Bookmark from <a href="javascript:${encoded}">here</a>.
    </p>

  </body>
</html>
`;

fs.writeFileSync('index.html', html);
