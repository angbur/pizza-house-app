import orderReducer, { createItem, addToOrder, removeFromOrder } from './../orderSlice';

describe('orderSlice', () => {
  const initialState = {
    entities: [
      createItem({
        item: {
          name: 'Pinza Mare',
          ingredients: ['shrimps', 'red fish', 'olives', 'white sauce', 'oregano', 'basil'],
          price: 26,
        },
        quantity: 1,
      }),
    ],
  };

  it(`should add an item to order when the ${addToOrder}`, () => {
    const item = createItem({
      item: {
        name: 'The Crispy Crust',
        ingredients: ['tomato sauce', 'salami', 'oregano', 'olives', 'cheese', 'basil'],
        price: 30,
      },
      quantity: 1,
    });
    const action = addToOrder(item);
    const newState = orderReducer(initialState, action);

    expect(newState.entities).toEqual([ item,...initialState.entities,]);
  });

  it(`should remove an item from order when the ${removeFromOrder}`, () => {
    const action = removeFromOrder(initialState.entities[0]._id);
    const newState = orderReducer(initialState, action);

    expect(newState.entities).toEqual([]);
  });
});
