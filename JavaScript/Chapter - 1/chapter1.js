alert("Hi this is alert function of JavaScript")

const func1 = a=>{
    return func2 = b=>{
        return a+b;
    }
}

const a = func1(4);
console.log(a(5));