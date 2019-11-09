import { LinkedList } from './linked-list.js';

describe('Linked list', () => {
    let list = null

    beforeEach(() => {
        list = new LinkedList()
    })

    it('should consist one element', () => {
        const element = {a: 1}
        list.add(element)
        expect(list.head.value).toBe(element)
        expect(list.tail.value).toBe(element)
    })
    it('should correct implemented add method',() => {
        const obj1 = {a: 1}
        const obj2 = {a: 2}
        const obj3 = {a: 3}
        list = list.add(obj1).add(obj2).add(obj3)
        expect(list.head.value).toBe(obj1)
        expect(list.tail.value).toBe(obj3)
        expect(list.head.next.value).toBe(obj2)
    })
    it('should correct implemented iterator',() => {
        const obj1 = {a: 1}
        const obj2 = {a: 2}
        const obj3 = {a: 3}
        list = list.add(obj1).add(obj2).add(obj3)
        const result = [], expectedResult = [obj1, obj2, obj3]
        for (let i of list) {
            result.push(i)
        }
        expect(result).toEqual(expectedResult)
    })
    it('should correct implemented iterator part 2',() => {
        const amountOfNumbers = 1000000
        const expectedResult = []
        for (let i = 0; i < amountOfNumbers; i++) {
            const obj = {a: i}
            list.add(obj)
            expectedResult.push(obj)
        }
        const result = []
        for (let i of list) {
            result.push(i)
        }
        expect(result).toEqual(expectedResult)
    })
})
