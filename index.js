function saturdayFun(activity = "roller-skate"){
    return "This Saturday, I want to " + activity + "!";
  }
console.log(saturdayFun("bathe my dog"));

function mondayWork(activity = "go to the office"){
    return "This Monday, I will " + activity + ".";
}
console.log(mondayWork("work from home"))

function wrapAdjective(niceSymbol = '*'){
    return function (niceWord = "special"){
        return `You are ${niceSymbol}${niceWord}${niceSymbol}!`
    }
}

