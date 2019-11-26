
var foo = (function(){
        var p = {age:16};
        var data = {d:p};
        var changeAge = function(){
            p.age++;
        };
        return {
            data:data,
            changeAge:changeAge
        };
    }
)();

console.log(foo.d.gae); //
foo.changeAge();
console.log(foo.d.gae); //
