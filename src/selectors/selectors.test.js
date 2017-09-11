import expect from 'expect';
import {authorsFormattedForDropDown} from './selectors';

describe('Author selectors', () => {
  describe('authorsFormattedForDropDown', () => {
    it('sohld return authors data formatted to display in drop down', () => {
      const authors = [
        {id: 'cory-house', firstName: 'cory', lastName: 'house'},
        {id: 'scott-alen', firstName: 'scott', lastName: 'alen'}
      ];

      const expected = [
        {value: 'cory-house', text: 'cory house'},
        {value: 'scott-alen', text: 'scott alen'}
      ];

      expect(authorsFormattedForDropDown(authors)).toEqual(expected);
    });
  });
});
