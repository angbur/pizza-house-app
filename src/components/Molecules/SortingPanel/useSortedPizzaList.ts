import { useGetPizzasListQuery } from 'services/pizza/pizza';
import { Pizza } from 'types/Pizza';

export type SortParams = 'name' | 'price asc' | 'price desc';

export const useSortedPizzaList = (param: SortParams): Pizza[] => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, error, isLoading } = useGetPizzasListQuery();
  let result: Pizza[] = [];

  if (isPizzaList(data?.pizzaList) && data) {
    result = [...data.pizzaList];
  }
  return result.sort((a, b) => {
    if (param === 'name') return compareByName(a, b);
    if (param === 'price desc') return a.price - b.price;
    if (param === 'price asc') return b.price - a.price;
    return compareByName(a, b);
  });
};

const compareByName = (a: Pizza, b: Pizza) => {
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

function isPizzaList(list: Pizza[] | undefined): list is Pizza[] {
  return (list as Pizza[]) !== undefined;
}
