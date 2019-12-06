import { factorial } from './factorial.js'

describe('The factorial function', () =>{
    it('call should return correct value', () => {
        expect(factorial(0)).toBe(	1);
        expect(factorial(1)).toBe(	1);
        expect(factorial(2)).toBe(	2);
        expect(factorial(3)).toBe(	6);
        expect(factorial(4)).toBe(	24);
        expect(factorial(5)).toBe(	120);
        expect(factorial(6)).toBe(	720);
        expect(factorial(7)).toBe(	5040);
        expect(factorial(8)).toBe(	40320);
        expect(factorial(9)).toBe(	362880);
        expect(factorial(10)).toBe(	3628800);
        expect(factorial(11)).toBe(	39916800);
        expect(factorial(12)).toBe(	479001600);
        expect(factorial(13)).toBe(	6227020800);
        expect(factorial(14)).toBe(	87178291200);
        expect(factorial(15)).toBe(	1307674368000);
    })
})
