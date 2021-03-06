import { sectionReducer, initialState } from './section-status.reducer';

describe('SectionStatus Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = sectionReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
