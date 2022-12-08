function multi(a,b){
     const total = a * b
     console.log(`Total = ${a} * ${b} = ${total}`)
}
multi(30,20)

function add(a,b,c = 40){
    const add = a + b + c
    return add
}
const sum = add(50,20)
console.log(`Total = ${sum}`)