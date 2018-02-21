const fs = require('fs');
const UglifyJS = require('uglify-es');

const code = UglifyJS.minify(fs.readFileSync('main.js', 'utf-8')).code;

const readme = `# Search in Longman Dictionary of Contemporary English

Bookmark the URI below. Select the word you want to search and click the bookmark.

\`\`\`
javascript:${code}
\`\`\`
`;

fs.writeFileSync('README.md', readme);
