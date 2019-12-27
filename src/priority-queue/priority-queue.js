export class PriorityQueue {
    constructor() {
        // {
        //     'priority: 1': [1, 3, 4, 5]
        //     'priority: 2': [1, 5]
        // }
        this.queue = {}
    }

    push(element, priority) {
        if (this.queue[priority]) {
            this.queue[priority].push(element)
        } else {
            this.queue[priority] = [element]
        }
    }

    pop(priority) {
        if (this.queue[priority]) {
            return this.queue[priority].pop()
        } else {
            throw 'Incorrect priority value'
        }
    }

    isEmpty() {
        return !Object.keys(this.queue).length
    }
}
