class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
    toString() {
        return this.value.toString ? this.value.toString() : JSON.stringify(this.value)
    }
}
export class LinkedList {

    constructor() {
        this.head = null
        this.tail = null
    }

    *[Symbol.iterator] () {
        let current = this.head
        do {
            yield current.value
            current = current.next
        } while(current)
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

    prepend(element) {
        const node = new Node(element)
        node.next = this.head
        this.head = node
        return this
    }

    has(element) {
        let node = this.head
        while(node && node.value !== element) {
            node = node.next
        }

        return !!node
    }

    delete(element) {
        if (this.head === this.tail) return false
        let current = this.head

        if (current.value === element) {
            this.head = current.next
            return true
        }

        while(current.next && current.next.value !== element) current = current.next

        if (current.next) {
            if (current.next === this.tail) {
                this.tail = current
            }
            current.next = current.next.next
            return true
        } else {
            return false
        }
    }

    find(element) {
        let current = this.head
        while(current && current.value !== element) current = current.next
        return current
    }
}
