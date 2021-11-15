import fs from 'fs/promises';
import path from 'path';
import Papa from 'papaparse';

import { CHAPTERS, BOOK_NAME_MAP } from './bible.js';

const getRefs = (ref) => {
  return ref
    .split(',')
    .map((r) => r.trim())
    .map((r) => {
      const regexpr = /[\d]+$/;
      if (!regexpr.test(r)) {
        return `${r} ${r !== 'Jude' ? '1-' : ''}${CHAPTERS[r]}`;
      }
      return r;
    })
    .reduce((acc, item) => [...acc, ...convertRefToRange(item)], []);
};

const convertRefToRange = (ref) => {
  const regexpr = /^(([12]\s)?([A-Za-z]+))\s(.*)$/;
  const [, book, , , chapters] = regexpr.exec(ref);
  const bookAbbrev = BOOK_NAME_MAP[book];

  if (book === 'JUD') {
    return [`${bookAbbrev}/1.json`];
  }

  const [start, end] = chapters.split('-').map((c) => parseInt(c, 10));
  const itemCount = !!end ? end - start + 1 : 1;

  return Array(itemCount)
    .fill(null)
    .map((_, idx) => idx + start)
    .map((c) => `${bookAbbrev}/${c}.json`);
};

const convertPlan = async (content) => {
  const results = Papa.parse(content.trim());
  const obj = results.data.map((item) => {
    const [day, date, morning, evening, psalms, morningTitle, eveningTitle] = item;
    return {
      day: parseInt(day, 10),
      date,
      morning: getRefs(morning),
      evening: getRefs(evening),
      psalms: getRefs(psalms),
      morningTitle,
      eveningTitle,
    };
  });

  return fs.writeFile(path.join(process.cwd(), 'data', 'plan.json'), JSON.stringify(obj, null, 2));
};

(async () => {
  await convertPlan((await fs.readFile(path.join(process.cwd(), 'data', 'plan.csv'))).toString());
})();
