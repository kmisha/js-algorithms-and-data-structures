export class LinkedList {

    constructor() {
        this.head = null
        this.tail = null
    }
    add(element) {
        if (!this.head) {
            this.head = this.tail = element
        } else {
            this.tail.next = element
            this.tail = element
        }
        return this
    }
}
