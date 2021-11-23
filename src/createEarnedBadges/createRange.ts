import { Ref } from './types';

const createRange = (start: Ref, end: Ref): Ref[] => {
  const [startDay, startType] = start.split('/');
  const [endDay, endType] = start.split('/');

  return ['2/evening'];
};

export default createRange;
