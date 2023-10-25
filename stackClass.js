class Stack {
    constructor(){
        this.array = []
    }
    push(element) {
        this.array.push(element)
    }

    pop() {
        return this.array.pop()
    }

    peek() {
        const lastIndex = this.array.length - 1
        return this.array[lastIndex]
    }

    isEmpty() {
        if(this.array.length == 0){
            return true
        }
        return false
    }
}

const s = new Stack()
console.log(s.isEmpty())
s.push(1)
console.log(s.peek())
s.push(2)
console.log(s.peek())
s.push(3)
s.push(4)
console.log(s.peek())
const poppedElement = s.pop()
console.log(poppedElement)
console.log(s.peek())