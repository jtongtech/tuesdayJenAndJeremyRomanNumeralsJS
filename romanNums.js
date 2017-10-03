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
        if (input_number >= 1000) {
            console.log(input_number);
            input_number = input_number - 1000;
            result += "M";
            console.log(input_number);
        } if (input_number >= 500) {
            console.log(input_number);
            input_number = input_number - 500;
            result += "D";
            console.log(input_number);
        } if (input_number >= 100) {
            console.log(input_number);
            input_number = input_number - 100;
            result += "C";
            console.log(input_number);
        } if (input_number >= 10) {
            console.log(input_number);
            input_number = input_number - 10;
            result += "X";
            console.log(input_number);
        } if (input_number >= 5) {
            console.log(input_number);
            input_number = input_number - 5;
            result += "V";
            console.log(input_number);
        } while (input_number < 5 && input_number != 0) {
            console.log(input_number);
            input_number = input_number - 1;
            result += "I";
            console.log(input_number);
        }
        return result;
    }
}
changeNumber(input_number);
//Logic Sections Above

// Test Section Below
console.log("Hello World")



function mEqualsOneThousand() {
    resetResult();
    changeNumber(1000);
    console.log(result);
    if (result == "M"){
    console.log("mEqualsOneThousand passed");
    }else{ 
        (console.log("mEqualsOneThousand failed"));
    }resetResult();
}

mEqualsOneThousand();

function dEqualsFiveHundred() {
    resetResult();
    changeNumber(500);
    console.log(result);
    if (result == "D"){
    console.log("dEqualsFiveHundred passed");
    }else{ 
        (console.log("dEqualsFiveHundred failed"));
    }resetResult();
}

dEqualsFiveHundred();

function cEqualsOneHundred() {
    resetResult();
    changeNumber(100);
    console.log(result);
    if (result == "C"){
    console.log("cEqualsOneHundred passed");
    }else{ 
        (console.log("cEqualsOneHundred failed"));
    }resetResult();
}

cEqualsOneHundred();

function xEqualsTen() {
    resetResult();
    changeNumber(10);
    console.log(result);
    if (result == "X"){
    console.log("xEqualsTen passed");
    }else{ 
        (console.log("xEqualsTen failed"));
    }resetResult();
}

xEqualsTen();

function vEqualsFive() {
    resetResult();
    changeNumber(5);
    console.log(result);
    if (result == "V"){
    console.log("vEqualsFive passed");
    }else{ 
        (console.log("vEqualsFive failed"));
    }resetResult();
}

vEqualsFive();

function iEqualsOne() {
    resetResult();
    changeNumber(1);
    console.log(result);
    if (result == "I"){
    console.log("iEqualsOne passed");
    }else{ 
        (console.log("iEqualsOne failed"));
    }resetResult();
}

iEqualsOne();

function miEqualsOneThousandandOne() {
    resetResult();
    changeNumber(1001);
    console.log(result);
    if (result == "MI"){
    console.log("miEqualsOneThousandandOne passed");
    }else{ 
        (console.log("miEqualsOneThousandandOne failed"));
    }resetResult();
}

miEqualsOneThousandandOne();

function miiEqualsOneThousandandTwo() {
    resetResult();
    changeNumber(1002);
    console.log(result);
    if (result == "MII"){
    console.log("miiEqualsOneThousandandTwo passed");
    }else{ 
        (console.log("miiEqualsOneThousandandTwo failed"));
    }resetResult();
}

miiEqualsOneThousandandTwo();

function mviEqualsOneThousandandSix() {
    resetResult();
    changeNumber(1006);
    console.log(result);
    if (result == "MVI"){
    console.log("mviEqualsOneThousandandSix passed");
    }else{ 
        (console.log("mviEqualsOneThousandandSix failed"));
    }resetResult();
}

mviEqualsOneThousandandSix();



// Test Section Above