import { PriorityQueue } from './priority-queue.js';

describe('The priority queue', () => {
    it('should be empty by default',() => {
        const queue = new PriorityQueue()
        expect(queue.isEmpty()).toBeTrue()
    })

    it('should be possible to push/pop objects', () => {
        const queue = new PriorityQueue()
        const obj = {a: 1}
        queue.push(obj, 1)
        expect(queue.isEmpty()).toBeFalse()
        expect(queue.pop(1)).toBe(obj)
    })

    it('should throw error if priority is not correct', () =>{
        const queue = new PriorityQueue()
        const obj = {a: 1}
        queue.push(obj, 1)
        expect(() => queue.pop(2)).toThrow()
    })
})
