import { LinkedList } from './linked-list.js';

describe('Linked list', () => {
    let list = null
    const amount = 1000

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
        const expectedResult = []
        for (let i = 0; i < amount; i++) {
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
    it('should correct implemented prepend method',() => {
        const arr = new Array(amount).fill(0).map((_, idx) => idx)
        arr.forEach(elm => list.add(elm))
        list.prepend(-1)
        const result = [...list]
        expect(result).toEqual([-1, ...arr])
    })
    it('should correct implemented has method',() => {
        const arr = new Array(amount).fill(0).map((_, idx) => ({a: idx}))
        arr.forEach(_ => list.add(_))
        const first = arr[0]
        const last  = arr[amount - 1]
        const middle_position = Math.floor((amount) - 1 / 2)
        const middle = arr[middle_position]
        const wrong = {a: -1}

        expect(list.has(middle)).toBe(true)
        expect(list.has(first)).toBe(true)
        expect(list.has(last)).toBe(true)
        expect(list.has(wrong)).toBe(false)
    })
    it('should correct delete element from empty list',() => {
        expect(list.delete({a: 1})).toBe(false)
    })
    it('should correct delete incorrect element from list',() => {
        Array(amount).fill(0).forEach((_, idx) => list.add({a: idx}))
        expect(list.delete({a: -1})).toBe(false)
    })
    it('should correct delete element from list',() => {
        const arr = Array(amount).fill(0).map((_, idx) => ({a: idx}))
        arr.forEach(elm => list.add(elm))
        const elem = Math.floor(Math.random() * (amount -1))
        expect(list.delete(arr[elem])).toBe(true)
        expect(list.has(arr[elem])).toBe(false)
    })
    it('should correct delete last element from list',() => {
        const arr = Array(amount).fill(0).map((_, idx) => ({a: idx}))
        arr.forEach(elm => list.add(elm))
        const elem = amount - 1
        expect(list.delete(arr[elem])).toBe(true)
        expect(list.has(arr[elem])).toBe(false)
    })
    it('should correct delete first element from list',() => {
        const arr = Array(amount).fill(0).map((_, idx) => ({a: idx}))
        arr.forEach(elm => list.add(elm))
        const elem = 0
        expect(list.delete(arr[elem])).toBe(true)
        expect(list.has(arr[elem])).toBe(false)
    })
})
