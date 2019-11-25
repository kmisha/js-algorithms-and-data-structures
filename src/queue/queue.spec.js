import { Queue } from './queue.js';

describe('Queue', () => {
    it('should create empty queue', () => {
        const queue = new Queue();
        expect(queue).not.toBeNull();
    });

    it('should push data to queue', () => {
        const queue = new Queue();

        queue.push(1);
        queue.push(2);
        queue.push(3)
        queue.push(4)

        expect([...queue]).toEqual([4, 3, 2, 1]);
    });

   it('should be possible to push/pop objects', () => {
        const queue = new Queue();
        const obj = { value: 'test1', key: 'key1' }
        queue.push(obj);

        expect(obj).toEqual(queue.pop());
        expect(queue.isEmpty()).toBeTrue();
    });

    it('should peek data from queue', () => {
        const queue = new Queue();

        expect(() => queue.pop()).toThrow();

        queue.push(1);
        queue.push(2);
        queue.push(3);

        expect(queue.pop()).toBe(1);
        expect(queue.pop()).toBe(2);
        expect(queue.pop()).toBe(3);
    });

    it('should check if queue is empty', () => {
        const queue = new Queue();

        expect(queue.isEmpty()).toBe(true);

        queue.push(1);

        expect(queue.isEmpty()).toBe(false);
    });

    it('should throw error if overflow queue size', () => {
        const queue = new Queue(2);
        queue.push(1)
        queue.push(2)
        expect(() => queue.push(3)).toThrow()
    });
});
