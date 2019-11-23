class Node {
    constructor(value, next) {
        this.value = value
        this.next = next
    }

    toString() {
        return this.value.toString ? this.value.toString() : JSON.stringify(this.value)
    }
}
export class Stack {
    constructor(maxsize = 10) {
        this.maxsize = maxsize
        this.head = null;
        this.size = 0
    }

    push(element) {
        if (this.size + 1 > this.maxsize) {
            throw 'Overflow stack size'
        }

        this.size += 1
        this.head = new Node(element, this.head ? this.head : null)
    }

    pop() {
        if (this.head === null) {
            throw 'Stack is empty'
        }

        this.size -= 1
        const { value } = this.head
        this.head = this.head.next

        return value
    }

    isEmpty() {
        return !this.head
    }

    toString(separator = ',') {
        let node = this.head, result = []

        while(node) {
            result = [...result, node.value]
            node = node.next
        }

        return result.join(separator)
    }

    peek() {
        return this.head ? this.head.value : this.head
    }
}
