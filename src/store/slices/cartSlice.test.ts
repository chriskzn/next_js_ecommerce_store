import { strict as assert } from 'assert';
import { cartSlice } from './cartSlice';

test('cart slice initial state', () => {
    const initialState = cartSlice.reducer(undefined, { type: '' });
    assert.deepEqual(initialState, {
        items: [],
        totalQuantity: 0,
        totalAmount: 0
    });
});