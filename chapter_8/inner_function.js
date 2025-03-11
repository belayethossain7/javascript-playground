// inner function
// nested function

function something(greeting, name){
    function greet(){
        console.log(greeting, name)  // you can use outer function any vrriable
                                     // no need to again set perameter in inner
    }

    greet()   // and inner function must call outer function/
              // without outer function , this inner function cannot or no calling any location 
              // this inner function only call in outer function
}

something ('Good morning', 'Belayet Hossain')

// greeting woth first name 

function belayet(greetings, fullName){
    function getFirstName(){
        if (fullName){
            return fullName.split(' ')[0]
        }
        else{
            return ''
        }
    }

    var msg = greetings + ' ' + getFirstName()
    console.log(msg)
}

belayet('good morning', 'Belayet Hossain')