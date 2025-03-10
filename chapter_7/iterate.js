// iterate out object
// using the for in loop 

var obj = {
    a: 10,
    b: 20,
    c: 30
}

// is a properties is availabel in a object or not 
// console.log('a' in obj) // check 'a' is avaiable in obj or not 
// console.log('s' in obj) // using or operator or keyword


// iterate

for ( var i in obj){    // every property in store in i variable,
    console.log(i)      // only store property not value , but using the property, we can eassily access values
    console.log(obj[i])  // use array notation because we use i  and i is a variable, and this i variable assigning the property ,
                        //  thats why use array notation
                        // when use variable thats time must use array notation
                        // thats why use arry notation
}
