// Tip = 18%

// function calcTip(amount) {
//     let tip = '';
//     for(amount) {
//         sum += i; // sum = sum + i
//     }
// }


function calcTip(amount) {
    let tip = amount * .18;
    return tip.toFixed(2) // toFixed() is the number of digits to appear after a decimal
    }

    let totalTip = calcTip(15);
    console.log(totalTip);
// console.log(tip);
//     return tip;