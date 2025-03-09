var arr = [1,2,3,4,5,6,6]
//var arr2 = [1,3,5,7,9]
//console.log(arr.join(' | ')) // join this space with or sign , after every array element 

//arr.fill(true)  //fill replace this B value every array element

//var arr3 = arr.concat(arr2)  // concating the 2 array

//console.log(Array.isArray(arr)) // check the array, it is array or not

var arr4 = Array.from(arr)  // same array copy here by using this function
                            //arr4 is copping arr by form method
                            //if i change arr4 , then there is  no effect on arr ,, its the main feature of this function


console.log(arr4)

