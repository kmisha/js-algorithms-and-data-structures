import { LinkedList } from './linked-list';

describe('Linked list', () => {
    let list = null

    beforeEach(() => {
        list = new LinkedList()
    })

    it('should consist one element', () => {
        const element = {a: 1}
        list.add(element)
        expect(list.head).toBe(element)
        expect(list.tail).toBe(element)
    })
    it('should correct implemented add method',() => {
        const obj1 = {a: 1}
        const obj2 = {a: 2}
        const obj3 = {a: 3}
        list = list.add(obj1).add(obj2).add(obj3)
        expect(list.head).toBe(obj1)
        expect(list.tail).toBe(obj3)
        expect(list.head.next).toBe(obj2)
    })
})
