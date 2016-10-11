const fs = require('fs');
const mustache = require('mustache');

const render = (template, code) => mustache.render(template, {code: code});

fs.readFile(
  'README.mustache',
  'utf-8',
  (e, template) =>
    fs.readFile(
      'uglified.js',
      'utf-8',
      (e, code) =>
        fs.writeFile('README.md', render(template, code))
    )
);
