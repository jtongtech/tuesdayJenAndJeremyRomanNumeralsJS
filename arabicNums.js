console.assert(1 === 2, 'That is wrong bob!');
var result = 0;
var input_letter = "";

function resetResult() {
    if (result != 0) {
        result = 0;
    }
}

//Logic Section Below

function romanToArabic(input_letter){
    if(input_letter == "M"){
        result += 1000;
    }else if(input_letter == "D"){
        result += 500;
    }
    return result;
}

//Logic Section Above


//Test Section Below
function testing(result, input_letter){
    console.assert(result == romanToArabic(input_letter), {"message":"result != to input_letter"});
}
testing(1000, romanToArabic("M"));
resetResult()
testing(500, romanToArabic("D"));
resetResult()
//Test Section Above