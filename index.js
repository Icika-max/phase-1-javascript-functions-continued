// code your solution here
function saturdayFun(activity= "roller-skate"){
    return(`This Saturday, I want to ${activity}!`);

}
saturdayFun("bathe my dog");

function mondayWork (activity= "go to the office"){
 return (`This Monday, I will ${activity}.`)
}
function wrapAdjective(adj){
return function (result="special"){
    return `You are ${adj}${result}${adj}!`
}
}
