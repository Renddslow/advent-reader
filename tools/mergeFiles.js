import fs from 'fs/promises';
import path from 'path';
import makeDir from 'make-dir';

const rollupFiles = async (files) => {
  const json = await Promise.all(
    files.map(async (p) => ({
      filepath: p,
      content: JSON.parse(
        (await fs.readFile(path.join(process.cwd(), 'data/cleaned', p))).toString(),
      ),
    })),
  );

  return json.reduce((acc, item) => {
    const [book, chapter] = item.filepath.replace('.json', '').split('/');
    acc.push({
      type: 'chapter_start',
      book,
      chapter,
    });
    acc.push(...item.content);
    acc.push({ type: 'chapter_end' });
    return acc;
  }, []);
};

const write = (reading, day, data, minify = true) => {
  return fs.writeFile(
    path.join(process.cwd(), 'public/data', day, `${reading}.json`),
    minify ? JSON.stringify(data) : JSON.stringify(data, null, 2),
  );
};

const mergeFiles = async (plan) => {
  return Promise.all(
    plan.map(async (day) => {
      const dayStr = day.day.toString();
      await makeDir(path.join(process.cwd(), 'public/data', dayStr));
      const [morningRollup, eveningRollup, psalmsRollup] = await Promise.all([
        rollupFiles(day.morningRange),
        rollupFiles(day.eveningRange),
        rollupFiles(day.psalmsRange),
      ]);
      await Promise.all([
        write('morning', dayStr, morningRollup),
        write('evening', dayStr, eveningRollup),
        write('psalms', dayStr, psalmsRollup),
      ]);
    }),
  );
};

(async () => {
  const planJSON = JSON.parse(
    (await fs.readFile(path.join(process.cwd(), 'data', 'plan.json'))).toString() || '[]',
  );
  await mergeFiles(planJSON);
})();
