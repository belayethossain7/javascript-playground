// Insert and Remove Element

var arr = [1,2,3,4,5,6,7,8]

// Insert 9 in index number 3

//arr[3] = 9 // this actually replace the 3 number index not adding
//arr.push(9) // push function work is add this 9 in the last of the array
//arr.unshift(9) // unshift function work is add this 9 in the first of the array

//arr.splice(3, 0, 9,10) //insert the specefic index by this splice function
                        // first perameter is tell the index numbe
                        // secound parameter is tell us the delete
                        // third and  go-on is inserting the numberr in this index

// Remove the data in the array

//arr[3] = undefined  // its the index 3 is udefined thats means empty not remove it
//arr.pop()  // remove data in the last of arrys index
//arr.shift() // remove the data in the first index of this array

// by using the splice , we can remove the spacefic index, whatever you want
arr.splice(3,1,44)  // index 3 will remove , only one element remove for using the 1 and indsert the value 44 in index 3 , that i define that

console.log(arr)
