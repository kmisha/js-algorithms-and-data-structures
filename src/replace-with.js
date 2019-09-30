export function replaceWithTag(parent, from, to) {
    const list = parent.childNodes
    list.forEach(node => {
        if (node.nodeName.toLowerCase() === from.toLowerCase()) {
            const newNode = document.createElement(to)
            newNode.textContent = node.textContent
            parent.replaceChild(newNode, node)
        }
    })
    return parent
}

export function scrollTo(element, container) {
    if(element === null || container === null) {
        return false;
    }
}
