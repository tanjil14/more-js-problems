const greetings = 'Hello, how are you?';

function reverseString(text){
    let reverse=''
    for(let letter of text){
      reverse=letter+reverse
      
    }
    return reverse
}
console.log(reverseString(greetings))