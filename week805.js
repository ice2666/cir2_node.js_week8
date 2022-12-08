//rest parameter function 
function number (a, ...sombat) {
    let sum = 0
    for(let i of sombat){
        sum = sum + i
    }
    return sum + a
} 
console.log(number(1,10, 20, 30, 40))//100git remote remove origin