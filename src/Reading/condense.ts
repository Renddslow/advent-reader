import md5 from 'md5';

const condense = (text: Record<string, any>[]) => {
  return text.reduce((acc: Record<string, any>[], chunk) => {
    if (chunk.type === 'chapter_start') {
      acc.push(chunk);
    }

    if (chunk.type === 'paragraph_start') {
      acc.push({
        type: 'paragraph',
        chunks: [],
      });
    }

    if (chunk.type.includes('_text') || chunk.type.includes('_name')) {
      const lastIdx = acc.length - 1;
      if (lastIdx > -1) {
        acc[lastIdx].chunks.push(chunk);
      }
    }

    if (chunk.type === 'paragraph_end') {
      const lastIdx = acc.length - 1;
      if (lastIdx > -1) {
        acc[lastIdx].id = md5(JSON.stringify(acc[lastIdx]));
      }
    }

    return acc;
  }, []);
};

export default condense;
