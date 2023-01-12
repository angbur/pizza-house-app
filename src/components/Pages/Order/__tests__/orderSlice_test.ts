import orderReducer, {
  createItem,
  addToOrder,
  removeFromOrder,
  removeAllOrder,
} from './../orderSlice';

describe('orderSlice', () => {
  const initialState = {
    entities: [
      createItem({
        item: {
          _id: '63b2d3b592b7f0f1c7c567b8',
          name: 'Pinza Mare',
          ingredients: ['shrimps', 'red fish', 'olives', 'white sauce', 'oregano', 'basil'],
          price: 26,
        },
        quantity: 1,
      }),
    ],
  };

  const item = createItem({
    item: {
      _id: '63b2d3c092b7f0f1c7c567ba',
      name: 'The Crispy Crust',
      ingredients: ['tomato sauce', 'salami', 'oregano', 'olives', 'cheese', 'basil'],
      price: 30,
    },
    quantity: 1,
  });

  it(`should add an item to order when the ${addToOrder}`, () => {
    const action = addToOrder(item);
    const newState = orderReducer(initialState, action);

    expect(newState.entities).toEqual([item, ...initialState.entities]);
  });

  it(`should update quantity of item when the ${addToOrder} add item that is already in order`, () => {
    const action = addToOrder(item);
    const state = orderReducer(initialState, action);
    const newState = orderReducer(state, action);

    expect(newState.entities.length).toEqual(2);

    const updatedItem = newState.entities.find((el) => el.item.name === 'The Crispy Crust');
    if (updatedItem) {
      expect(updatedItem.quantity).toEqual(2);
    }
  });

  it(`should remove an item from order when the ${removeFromOrder}`, () => {
    const state = orderReducer(initialState, addToOrder(item));
    const action = removeFromOrder(item._id);
    const newState = orderReducer(state, action);

    expect(newState.entities.find((el) => el.item.name === 'The Crispy Crust')).toEqual(undefined);
  });

  it(`should remove all order when ${removeAllOrder}`, () => {
    const action = addToOrder(item);
    const state = orderReducer(initialState, action);

    const newState = orderReducer(state, removeAllOrder());
    expect(newState.entities.length).toEqual(0);
  });
});
