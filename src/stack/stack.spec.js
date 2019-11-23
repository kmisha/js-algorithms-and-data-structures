import { Stack } from './stack.js';

describe('Stack', () => {
    const amount = 10000

    it('should correct implement push and pop methods', () => {

        const stack = new Stack(amount)
        const expected = Array(amount).fill(0).map(() => {
            const obj = {a: Math.floor(Math.random() * amount)}
            stack.push(obj)
            return obj
        })

        expected.reverse().forEach(obj => {
            expect(stack.pop()).toEqual(obj)
        })
    })
    it('should throw Stack is empty message when stack is empty', () => {
        const stack = new Stack(amount)
        expect(() => stack.pop()).toThrow()
    })
    it('should throw Stack is empty message when stack is empty', () => {
        const stack = new Stack(amount)

        for( let i = 0; i < amount; i++) {
            stack.push(i)
        }

        for( let i = 0; i < amount; i++) {
            stack.pop()
        }


        expect(() => stack.pop()).toThrow()
    })
    it('should throw Overflow stack size message when stack size is bigger then amount', () => {
        const stack = new Stack(amount)
        for( let i = 0; i < amount; i++) {
            stack.push(i)
        }
        expect(() => stack.push({})).toThrow()
    })
    it('should create empty stack',() => {
        const stack = new Stack()
        expect(stack).not.toBeNull()
    })
    it('should stack data to stack', () => {
        const stack = new Stack();

        stack.push(1)
        stack.push(2)
        stack.push(3)

        expect(stack.toString()).toEqual('3,2,1')
        expect(stack.toString(':')).toEqual('3:2:1')
    })
    it('should peek data from stack', () => {
        const stack = new Stack()
        expect(stack.peek()).toBeNull()

        stack.push(1)
        stack.push(10)

        expect(stack.peek()).toBe(10)
    })
    it('should check if stack is empty', () => {
        const stack = new Stack()
        expect(stack.isEmpty()).toBeTrue()

        stack.push(1)
        expect(stack.isEmpty()).toBeFalse()

        stack.pop()
        expect(stack.isEmpty()).toBeTrue()
    })
})
