class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
export class LinkedList {

    constructor() {
        this.head = null
        this.tail = null
    }
    add(element) {
        if (!this.head) {
            this.head = this.tail = new Node(element)
        } else {
            const node = new Node(element)
            this.tail.next = node
            this.tail = node
        }
        return this
    }

    *[Symbol.iterator] () {
        let current = this.head
        do {
            yield current.value
            current = current.next
        } while(current)
    }
}
