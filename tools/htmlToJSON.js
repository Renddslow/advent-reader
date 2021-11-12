import { visitParents } from 'unist-util-visit-parents';
import { selectAll } from 'hast-util-select';
import { get } from 'dot-prop';

const htmlToJSON = (tree) => {
  const json = [];
  const paragraphs = selectAll('.p', tree);
  for (const para of paragraphs) {
    json.push({ type: 'paragraph_start' });
    visitParents(para, 'text', (node, parents) => {
      const cx = [];
      parents.forEach(({ type, properties }) => {
        if (type === 'element') {
          cx.push(...properties.className);
        }
      });
      if (cx.includes('verse') && cx.includes('content')) {
        if (cx.includes('sc')) {
          json.push({
            type: 'divine_name',
            value: node.value,
          });
        } else {
          json.push({
            type: cx.includes('bd') && cx.includes('it') ? 'paragraph_text_xref' : 'paragraph_text',
            value: node.value,
          });
        }
      }
    });
    json.push({ type: 'paragraph_end' });
  }

  return JSON.stringify(json, null, 2);
};

export default htmlToJSON;
