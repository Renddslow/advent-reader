import test from 'ava';
import createRange from './createRange';

test('', (t) => {
  t.deepEqual(createRange('1/morning', '3/evening'), [
    '1/morning',
    '1/evening',
    '2/morning',
    '2/evening',
    '3/morning',
    '3/evening',
  ]);
});
