import { Pizza } from 'types/Pizza';

export const sortByName = (data: Pizza[]) => data.sort((a, b) => compareFn(a, b));

const compareFn = (a: Pizza, b: Pizza) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
};
