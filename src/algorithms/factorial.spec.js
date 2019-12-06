import { algorithms } from './algorithms.js'

describe('The algorithms function', () =>{
    it('call should return correct value', () => {
        expect(algorithms(0)).toBe(	1);
        expect(algorithms(1)).toBe(	1);
        expect(algorithms(2)).toBe(	2);
        expect(algorithms(3)).toBe(	6);
        expect(algorithms(4)).toBe(	24);
        expect(algorithms(5)).toBe(	120);
        expect(algorithms(6)).toBe(	720);
        expect(algorithms(7)).toBe(	5040);
        expect(algorithms(8)).toBe(	40320);
        expect(algorithms(9)).toBe(	362880);
        expect(algorithms(10)).toBe(	3628800);
        expect(algorithms(11)).toBe(	39916800);
        expect(algorithms(12)).toBe(	479001600);
        expect(algorithms(13)).toBe(	6227020800);
        expect(algorithms(14)).toBe(	87178291200);
        expect(algorithms(15)).toBe(	1307674368000);
    })
})
