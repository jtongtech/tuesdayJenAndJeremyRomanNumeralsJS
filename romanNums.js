var result = "";
var input_number = 0;

//Logic Section Below

function resetResult() {
    if (result != ""){
        result = "";
    }
}

function changeNumber(input_number) {
    while (input_number > 0){
        while (input_number >= 1000) {
            // console.log(input_number);
            input_number = input_number - 1000;
            result += "M";
            // console.log(input_number);
        }if (input_number < 1000 && input_number > 899) {
            input_number = input_number - 900;
            result += "CM";
        } if (input_number >= 500) {
            // console.log(input_number);
            input_number = input_number - 500;
            result += "D";
            // console.log(input_number);
        }if (input_number < 500 && input_number > 399) {
            input_number = input_number - 400;
            result += "CD";
        } while (input_number >= 100) {
            // console.log(input_number);
            input_number = input_number - 100;
            result += "C";
            // console.log(input_number);
        }if (input_number < 100 && input_number > 89) {
            input_number = input_number - 90;
            result += "XC";
        }if (input_number >= 50) {
            // console.log(input_number);
            input_number = input_number - 50;
            result += "L";
            // console.log(input_number);
        }if (input_number < 50 && input_number > 39) {
            input_number = input_number - 40;
            result += "XL";
        } while (input_number >= 10) {
            // console.log(input_number);
            input_number = input_number - 10;
            result += "X";
            // console.log(input_number);
        }if (input_number < 10 && input_number > 8) {
            input_number = input_number - 9;
            result += "IX";
        } if (input_number >= 5) {
            // console.log(input_number);
            input_number = input_number - 5;
            result += "V";
            // console.log(input_number);
        }if (input_number < 5 && input_number > 3) {
            input_number = input_number - 4;
            result += "IV";
        } while (input_number < 5 && input_number != 0) {
            // console.log(input_number);
            input_number = input_number - 1;
            result += "I";
            // console.log(input_number);
        }
        return result;
    }
}
changeNumber(input_number);
//Logic Sections Above

// Test Section Below
console.warn("Hello World")



function mEqualsOneThousand() {
    resetResult();
    changeNumber(1000);
    // console.log(result);
    if (result == "M"){
    console.warn("mEqualsOneThousand passed");
    }else{ 
        (console.warn("mEqualsOneThousand failed"));
    }resetResult();
}

mEqualsOneThousand();

function dEqualsFiveHundred() {
    resetResult();
    changeNumber(500);
    // console.log(result);
    if (result == "D"){
    console.warn("dEqualsFiveHundred passed");
    }else{ 
        (console.warn("dEqualsFiveHundred failed"));
    }resetResult();
}

dEqualsFiveHundred();

function cEqualsOneHundred() {
    resetResult();
    changeNumber(100);
    // console.log(result);
    if (result == "C"){
    console.warn("cEqualsOneHundred passed");
    }else{ 
        (console.warn("cEqualsOneHundred failed"));
    }resetResult();
}

cEqualsOneHundred();

function xEqualsTen() {
    resetResult();
    changeNumber(10);
    // console.log(result);
    if (result == "X"){
    console.warn("xEqualsTen passed");
    }else{ 
        (console.warn("xEqualsTen failed"));
    }resetResult();
}

xEqualsTen();

function vEqualsFive() {
    resetResult();
    changeNumber(5);
    // console.log(result);
    if (result == "V"){
    console.warn("vEqualsFive passed");
    }else{ 
        (console.warn("vEqualsFive failed"));
    }resetResult();
}

vEqualsFive();

function iEqualsOne() {
    resetResult();
    changeNumber(1);
    // console.log(result);
    if (result == "I"){
    console.warn("iEqualsOne passed");
    }else{ 
        (console.warn("iEqualsOne failed"));
    }resetResult();
}

iEqualsOne();

function miEqualsOneThousandandOne() {
    resetResult();
    changeNumber(1001);
    // console.log(result);
    if (result == "MI"){
    console.warn("miEqualsOneThousandandOne passed");
    }else{ 
        (console.warn("miEqualsOneThousandandOne failed"));
    }resetResult();
}

miEqualsOneThousandandOne();

function miiEqualsOneThousandandTwo() {
    resetResult();
    changeNumber(1002);
    // console.log(result);
    if (result == "MII"){
    console.warn("miiEqualsOneThousandandTwo passed");
    }else{ 
        (console.warn("miiEqualsOneThousandandTwo failed"));
    }resetResult();
}

miiEqualsOneThousandandTwo();

function mviEqualsOneThousandandSix() {
    resetResult();
    changeNumber(1006);
    // console.log(result);
    if (result == "MVI"){
    console.warn("mviEqualsOneThousandandSix passed");
    }else{ 
        (console.warn("mviEqualsOneThousandandSix failed"));
    }resetResult();
}

mviEqualsOneThousandandSix();

function xxEqualsTwenty() {
    resetResult();
    changeNumber(20);
    // console.log(result);
    if (result == "XX"){
    console.warn("xxEqualsTwenty passed");
    }else{ 
        (console.warn("xxEqualsTwenty failed"));
    }resetResult();
}

xxEqualsTwenty();

function mmxxiiEqualsTwoThousandTwentyTwo() {
    resetResult();
    changeNumber(2022);
    // console.log(result);
    if (result == "MMXXII"){
    console.warn("mmxxiiEqualsTwoThousandTwentyTwo passed");
    }else{ 
        (console.warn("mmxxiiEqualsTwoThousandTwentyTwo failed"));
    }resetResult();
}

mmxxiiEqualsTwoThousandTwentyTwo();

function cmEqualsNineHundred() {
    resetResult();
    changeNumber(900);
    // console.log(result);
    if (result == "CM"){
    console.warn("cmEqualsNineHundred passed");
    }else{ 
        (console.warn("cmEqualsNineHundred failed"));
    }resetResult();
}

cmEqualsNineHundred();

function cmxcixEqualsNineHundredNinetyNine() {
    resetResult();
    changeNumber(999);
    // console.log(result);
    if (result == "CMXCIX"){
    console.warn("cmxcixEqualsNineHundredNinetyNine passed");
    }else{ 
        (console.warn("cmxcixEqualsNineHundredNinetyNine failed"));
    }resetResult();
}

cmxcixEqualsNineHundredNinetyNine();

function mmmcmxlivEquals3944() {
    resetResult();
    changeNumber(3944);
    // console.log(result);
    if (result == "MMMCMXLIV"){
    console.warn("mmmcmxlivEquals3944 passed");
    }else{ 
        (console.warn("mmmcmxlivEquals3944 failed"));
    }resetResult();
}

mmmcmxlivEquals3944();

// 3944

// Test Section Above