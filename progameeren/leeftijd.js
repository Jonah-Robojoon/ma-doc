let jaar = 2008
let maand = 6
let dag = 8

console.log("Welk jaar ben je geboren?", jaar)
console.log("Welke maand ben je geboren?", maand)
console.log("Welke dag ben je geboren?", dag)

function MyDate(jaar,maand,dag){
let now = new Date();
let birth = new Date(jaar, maand, dag)
let miliseconds = now-birth
return miliseconds
}

let MyAge = MyDate(2008,6,8)/31557600000

console.log("ik ben ", MyAge.toFixed(2))