const speed = Number (prompt("Input car speed"))

const speedLimit = 70

const integer = 5

let demerit = ((speed - speedLimit)/integer)
const maxDemerit = 12 

if (demerit < maxDemerit){
    return demerit 
}else if (demerit = maxDemerit){
    return "License Suspended"
}else if (speed < 70){
    return "ok"
}
console.log(demerit)
