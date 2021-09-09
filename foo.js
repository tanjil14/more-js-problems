
for(let i=1;i<=50;i++){
    if(i%3==0 && i%5==0){
        console.log('Foobar')
    }
    else if(i%3==0){
        console.log('Foo')
    }
    else if (i % 5 == 0) {
        console.log('bar');
    }
    else {
          console.log(i)
    }
}