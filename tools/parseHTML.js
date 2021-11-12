import { unified } from 'unified';
import rehypeParse from 'rehype-parse';
import fs from 'fs/promises';
import path from 'path';

import mapFiles from './mapFiles.js';
import htmlToJSON from './htmlToJSON.js';

function toJSON() {
  Object.assign(this, { Compiler: compiler });

  function compiler(tree) {
    return htmlToJSON(tree);
  }
}

const parseHTML = async (content) => {
  const data = await unified().use(rehypeParse).use(toJSON).process(content);
  return data.value;
};

(async () => {
  await mapFiles('html', 'html', 'intermediate', 'json', parseHTML);
})();
