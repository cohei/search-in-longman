import { minify } from 'terser';
import bookmarklet from './bookmarklet.js';

const { code } = await minify(`(${bookmarklet})()`);
document.getElementById('bookmarklet').href = 'javascript:' + encodeURIComponent(code);
