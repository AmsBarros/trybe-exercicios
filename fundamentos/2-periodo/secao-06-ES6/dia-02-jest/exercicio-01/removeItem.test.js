const removeItem = require('./removeItem');

describe('A função removeItem(arr, item)', () => {
    it('deve retornar uma cópia do array sem o elememto item, se houver', () => {
        expect(removeItem([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
        expect(removeItem([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
        expect(removeItem([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    })
});
