
/* First all the calculations are done and then the output will come.*/
function mindGame(number){
    if(typeof number!=='number'){
        return 'please provide valid numbers';
    }
    let multiply = number *3;
    let add = multiply + 10;
    let divide = add / 2;
    const totalResult = divide - 5;
    return totalResult;
}


/* A string name to be checked */
function evenOdd(str){
    if(typeof str!=='string'){
        return 'please provide valid numbers';
    }
    const remainder = str.length;
    if(remainder % 2 === 0 ){
        return 'even';
    }
    else{
        return 'odd';
    }
}

/* 
Check if a number is greater than seven */
function isLGSeven(number){
    if(typeof number!=='number'){
        return 'please provide valid numbers';
    }
    let index = number-7;
    if(index < 7){
        return index;
    }
    else{
        return number*2;
    }
}

/* Negative numbers be extracted from this array */
function findingBadData(numbers){
    if(Array.isArray(numbers)!==true){
        return 'please provide valid numbers';
    }
    let number = 0;
    for(let i = 0; i<numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element < 0){
            number++; 
        }
    }
    return number;
}
/* Three friends have to find the total number */
function gemsToDiamond(firstFriendQuantity,secondFriendQuantity,thirdFriendQuantity){
    if(typeof firstFriendQuantity !== 'number'){
        return 'please provide valid numbers';
    }
    if(typeof secondFriendQuantity !== 'number'){
        return 'please provide valid numbers';
    }
    if(typeof thirdFriendQuantity !== 'number'){
        return 'please provide valid numbers';
    }

    let firstFriendGems = 21;
    let secondFriendGems = 32;
    let thirdFriendGems= 43;
    const firstGems = firstFriendQuantity * firstFriendGems;
    const secondGems = secondFriendQuantity * secondFriendGems;
    const thirdGems = thirdFriendQuantity * thirdFriendGems
    const totalDiamond = firstGems + secondGems + thirdGems;
    if(totalDiamond<2000){
       return totalDiamond;
    }
    return totalDiamond-2000;
}



    

