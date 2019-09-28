import { replaceWithTag } from './replace-with.js'

describe('replaceWith method', () => {
    let parent, child
    const content = 'This is a simple content'
    beforeEach(() => {
        parent = document.createElement('div')
        child = document.createElement('p')
        child.textContent = content
        parent.appendChild(child)
    })
    it('replaces a child node', () => {
        parent = replaceWithTag(parent, 'p', 'span')
        expect(parent.firstChild.nodeName.toLowerCase()).toEqual('span')
    })
    it('replaces a child node with the same text content', () => {
        parent = replaceWithTag(parent, 'p', 'span')
        expect(parent.firstChild.textContent).toEqual(content)
    })
})
