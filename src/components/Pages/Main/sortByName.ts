import { useGetPizzasListQuery } from 'services/pizza';
import { Pizza } from 'types/Pizza';

export const useSortedPizzaList = (): Pizza[] => {
  const { data, error, isLoading } = useGetPizzasListQuery();
  let result: Pizza[] = [];

  if (isPizzaList(data?.pizzaList) && data) {
    result = [...data.pizzaList];
  }
  return result.sort((a, b) => compareFn(a, b));
};

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

function isPizzaList(list: Pizza[] | undefined): list is Pizza[] {
  return (list as Pizza[]) !== undefined;
}
