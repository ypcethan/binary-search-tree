class Node {
    constructor(value, parent=null) {
        this.value = value
        this.parent = parent
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(){
        this.root=null
    }

    search(value, node=this.root){
        if(node.value === value) {
            return node
        }
        if (node.value < value && node.right){
            return this.search(value, node.right)
        }
        else if(node.value > value && node.left){
            return this.search(value, node.left)
        }
        // Such node no exist, return the parent as if it were to exist.
        return node
    }

    insert(value){
        let newNode = new Node(value)
        if(!this.root){
            this.root = newNode 
        }
        else{
            let parentNode = this.search(value)
            if(parentNode.value < value){
                parentNode.right = newNode 
            }
            else{
                parentNode.left = newNode
            }
            newNode.parent = parentNode
            return newNode
        }
    }
   
    min(node = this.root){
        if (!node){
            return null
        }
        if(!node.left){
            return node 
        }
        return this.min(node.left)
    }

    max(node = this.root){
        if (!node){
            return null
        }
        if(!node.right){
            return node 
        }
        return this.max(node.right)
    }
    successor(value){
        let node = this.search(value)
        
        if (node.right){
            return this.min(node.right)
        }
        else{
            // Find the first right ancestor
            while(node.parent){
                if(node.parent.value > node.value){
                    return node.parent
                }
                node = node.parent
            }
        }
    }
    // Link node1's parent to node2 and set node2's parent to node1's parent
    _replaceParentLink(node1,node2){
        if(!node1.parent){
            // node1 is root
            node2.parent = null
            this.root = node2
            return 
        }
        if(node1.parent.value < node1.value){
            // node1 is right child
            node1.parent.right = node2
        }
        else{
            node1.parent.left = node2
        }
        if(node2){
            node2.parent = node1.parent
        }
    }
    delete(value){
        const node = this.search(value)
        if(!node.right){
            this._replaceParentLink(node,node.left)
        }
        else{
            const next = this.successor(node.value)
            this._replaceParentLink(next , next.right)
            node.value = next.value
        }
    }
}

module.exports = {
    Node,
    BinarySearchTree
}