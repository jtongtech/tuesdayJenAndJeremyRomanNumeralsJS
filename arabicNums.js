console.assert(1 === 2, 'That is wrong bob!');
var result = 0;
var input_letter = "";

//Logic Section Below

function romanToArabic(input_letter){
    if(input_letter == "M"){
        result += 1000;
    }
    return result;
}

//Logic Section Above


//Test Section Below
function testing(result, input_letter){
    console.assert(result == romanToArabic(input_letter), {"message":"result != to input_letter"});
}
testing(1000, romanToArabic("M"));
testing(500, romanToArabic("D"));
//Test Section Above