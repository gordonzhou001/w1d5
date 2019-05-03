var newlist = require("./creatingexports");

// console.log(newlist.takesanumber(newlist.takesanumber(newlist.takesanumber(4))))

// Creates an array with circular objects
//[ 4, [Circular], [Circular] ]

newlist.takesanumber(5)
newlist.takesanumber(8)
newlist.takesanumber(2)
newlist.takesanumber(10)
var list = console.log(newlist.takesanumber(1))
console.log(newlist.sortnumber(list))