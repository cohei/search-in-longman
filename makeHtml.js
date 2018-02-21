const fs = require('fs');
const UglifyJS = require('uglify-es');

const code = UglifyJS.minify(fs.readFileSync('main.js', 'utf-8')).code;
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
