import prettier from 'prettier';
import { StringDecoder } from 'string_decoder';

import mapFiles from './mapFiles.js';

const decoder = new StringDecoder('utf8');

const flipAlphabet = (n) => ((0xff & n) >> 5) | ((0xff & n) << 3);

const parse = (arr) => {
  const bytes = [];
  let i = 0;
  while (i < arr.length) {
    if (arr.length > i + 1) {
      const b = flipAlphabet(arr[i + 1]);
      bytes.push(b);
    }
    const b = flipAlphabet(arr[i]);
    bytes.push(b);
    i += 2;
  }

  return decoder.write(Buffer.from(bytes.map((x) => String.fromCharCode(x)).join(''), 'ascii'));
};

(async () => {
  await mapFiles('raw', 'yves', 'html', 'html', parse, false);
})();
