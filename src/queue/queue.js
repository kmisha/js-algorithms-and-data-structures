class Node {
    constructor(value, next) {
        this.value = value
        this.next = next
        this.prev = null
    }

    toString() {
        return this.value.toString ? this.value.toString() : JSON.stringify(this.value)
    }
}
export class Queue {
    constructor(max_size = 10) {
        this.max = max_size
        this.head = this.tail = null
        this.size = 0
    }

    *[Symbol.iterator] () {
        let node = this.head
        do {
            yield node.value
            node = node.next
        } while (node)
    }

    push(element) {
        if (this.size + 1 > this.max) throw 'Overflow queue size'

        const node = new Node(element, this.head)

        if (this.head) {
            this.head.prev = node
        }

        this.head = node

        if (!this.tail) {
            this.tail = node
        }

        this.size++
    }

    pop() {
        if (this.isEmpty()) {
            throw 'Stack is empty'
        }

        const { value } = this.tail

        if (this.head === this.tail) {
            this.tail = this.head = null
            return value
        }

        const last = this.tail.prev

        if (last && last.prev) {
                last.next = null
                this.tail = last;
        } else {
            this.tail = this.head
        }

        return value
    }

    isEmpty() {
        return (this.head === this.tail && this.head === null)
    }
}
