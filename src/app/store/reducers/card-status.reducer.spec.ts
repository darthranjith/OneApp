import { cardReducer, initialState } from './card-status.reducer';

describe('CardStatus Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = cardReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
