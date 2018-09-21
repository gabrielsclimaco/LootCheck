import balanceReducer from './balance';
import * as constants from '../actions/constants';

describe('balanceReducer', () => {
  const balance = 10;

  it('sets a balance', () => {
    expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance }))
      .toEqual(balance);
  });
});
