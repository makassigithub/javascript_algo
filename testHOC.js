
const  greaterThan = a => b => a > b ;

const than2 = greaterThan(2);
console.log(than2(1));

console.log(greaterThan(2)(3));

Array.prototype.oneIsEqual= function(fn){
  for( e of this){
    if(fn(e)){
     return true;
   }     
  }
  return false;
}

const isSame = a => b => a === b ;

console.log( '[1,2,3] constains  1 :'+[1,2,3].oneIsEqual(isSame(1))); 
console.log( '[1,2,3] constains  4 :'+[1,2,3].oneIsEqual(isSame(4)));

 
