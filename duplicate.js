const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'fabul', 'babul', 'ebul', 'babul', 'gabul', 'abul', 'habul', 'dabul'];

function removeDuplicate(names){
let unique=[]
for (let name of names){
    if(unique.indexOf(name)==-1){
       unique.push(name)
    }
}
return unique
}
console.log(removeDuplicate(names))