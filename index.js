function stack(initialSize = 10){
    this.items = Array(initialSize)
    this.pointer = 0
}

stack.prototype.size = function() {
    return this.pointer
}

stack.prototype.push = function(value) {
    this.items[this.pointer++] = value
}

stack.prototype.pop = function() { 
  const resultpopped = this.items[--this.pointer]
  this.items[this.pointer] = null
  return resultpopped
}
stack.prototype.showarray = function() {
   return this.items[this.pointer]
}
stack.prototype.getarray = function(itemsinput) {
    for(let i in itemsinput) {
        this.push(itemsinput[i])
    }
}

module.exports = stack