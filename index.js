// Your code here
function saturdayFun(fun = 'roller-skate') {
    return(`This Saturday, I want to ${fun}!`)
}
function mondayWork(monday = 'go to the office') {
    return (`This Monday, I will ${monday}.`)
}
console.log(mondayWork ("work from home"))

function wrapAdjective(wrap = "*") {
    let newFunction = function(hi){
        return `You are ${wrap}${hi}${wrap}!`
    }
    return newFunction
}
//     return (default, inner = "a hard worker"); 
//     return `You are ${defaul}!`