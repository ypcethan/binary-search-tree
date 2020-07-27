const {
    Node,
    BinarySearchTree
} = require('./BinarySearchTree')
describe('Insert', () => {
    let tree
    beforeEach(() => {
        tree = new BinarySearchTree()
        tree.insert(32)
    })
    test('Insert at root', () => {
        expect(tree.root).toEqual(new Node(32))
    })
    test('Insert right', () => {
        tree.insert(34)
        expect(tree.root.right.value).toEqual(34)
    })
    test('Insert right right', () => {
        tree.insert(34)
        tree.insert(36)
        expect(tree.root.right.value).toEqual(34)
        expect(tree.root.right.right.value).toEqual(36)
    })
    test('Insert left', () => {
        tree.insert(4)
        expect(tree.root.left.value).toEqual(4)
    })
    test('Insert right right', () => {
        tree.insert(4)
        tree.insert(2)
        expect(tree.root.left.value).toEqual(4)
        expect(tree.root.left.left.value).toEqual(2)
    })
    test('Insert left right', () => {
        tree.insert(4)
        tree.insert(6)
        expect(tree.root.left.value).toEqual(4)
        expect(tree.root.left.right.value).toEqual(6)
    })
    test('Insert right left', () => {
        tree.insert(40)
        tree.insert(38)
        expect(tree.root.right.value).toEqual(40)
        expect(tree.root.right.left.value).toEqual(38)
    })
})

describe('Min and Max', () => {
    let tree
    beforeEach(() => {
        tree = new BinarySearchTree() 
        let arr = [42,423,23,91,2402,3234,2,4]
        for(let i of arr){
            tree.insert(i)
        }
    })
    test('Min', ()=> {
        expect(tree.min().value).toBe(2)
    })
    test('Max', ()=> {
        expect(tree.max().value).toBe(3234)
    })
})
describe('Successor', () => {
    let tree 
    beforeEach(() => {
        tree = new BinarySearchTree() 
        let arr = [42,423,23,91,2402,3234,2,4]
        for(let i of arr){
            tree.insert(i)
        }
    }) 
    test('Case right child exist', ()=> {
        expect(tree.successor(423).value).toEqual(2402)
        expect(tree.successor(23).value).toEqual(42)
        expect(tree.successor(42).value).toEqual(91)
    })
})
describe('Delete', () => {
    let tree 
    beforeEach(() => {
        tree = new BinarySearchTree()
        let arr = [9,1,6,7,8,2,4,5,3]
        for(let i of arr){
            tree.insert(i)
        }
    })
    test('Case 1, deleted node has right child' , ()=> {
        expect(tree.root.left.right.value).toEqual(6)
        tree.delete(1)
        expect(tree.root.left.value).toEqual(2)
    })
    test('Case 1 ex2, deleted node has right child' , ()=> {
        tree.delete(6)
        expect(tree.root.left.right.value).toEqual(7)
    })
    test('Case 1 ex3, deleted node has right child' , ()=> {
        tree.delete(4)
        expect(tree.root.left.right.left.right.value).toEqual(5)
    })
    test('Case 1 ex4, deleted root' , ()=> {
        tree.delete(9)
        expect(tree.root.value).toEqual(1)
    })
    test('Case 1 ex5, deleted node has no right child' , ()=> {
        tree = new BinarySearchTree()
        let arr = [9,6,5,2,4,3]
        for(let i of arr){
            tree.insert(i)
        }
        tree.delete(6)
        expect(tree.root.value).toEqual(9)
        expect(tree.root.left.value).toEqual(5)
        tree.delete(5)
        expect(tree.root.left.value).toEqual(2)
    })
})
// describe('Next' , ()=> {
//     let tree  = new BinarySearchTree()
//     beforeEach(() => {
//         let arr = [9,1,6,7,8,2,4,5,3]
//         for(let i of arr){
//             tree.insert(i)
//         }
//     }) 
//     test('Correct ' , ()=> {
//         expect(tree.next(6).value).toEqual(7)
//         expect(tree.next(1).value).toEqual(2)
//         expect(tree.next(3).value).toEqual(4)
//     })
// })