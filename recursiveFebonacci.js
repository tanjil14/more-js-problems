// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]
/* 
3rd = 2nd + 1st
4th = 3rd + 2nd
5th = 4th + 3rd
6th = 5th + 4th
16th = 15th + 14th
119th = 118th + 117th
nth = (n-1)th + (n-2)th
ith = (i-1)th + (i-2)th
*/

/* function feboElement(n){
    if(n==0){
        return 0
    }
    if(n==1){
        return 1
    }
    return feboElement(n-1)+feboElement(n-2)
}
console.log(feboElement(0)) */

function feboSeries(n){
    if(n==0){
        return [0]
    }
    if(n==1){
        return [0,1]
    }
    const febo=feboSeries(n-1)
    febo[n]=febo[n-1]+febo[n-2]
    return febo;
}
console.log(feboSeries(10))