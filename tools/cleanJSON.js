import mapFiles from './mapFiles.js';

const cleanJSON = (f) => {
  const data = JSON.parse(f);
  const items = [];

  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    if (item.type === 'divine_name') {
      item.value = item.value.replace(/Lord/, 'YHWH');
      if (items[i - 1].value) {
        items[i - 1].value = items[i - 1].value.replace(/the $/i, '');
      }
    }
    items.push(item);
  }

  return JSON.stringify(items, null, 2);
};

(async () => {
  await mapFiles('intermediate', 'json', 'cleaned', 'json', cleanJSON);
})();
