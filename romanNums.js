var result = "";
var input_number = 0;

//Logic Section Below
function changeNumber(input_number){
    if(input_number == 1000){
        result = "M";
    } else if (input_number == 500){
        result = "D";
    } else if (input_number == 100){
        result = "C";
    } else if (input_number == 10){
        result = "X";
    } else if (input_number == 5){
        result = "V";
    } else if (input_number == 1){
        result = "I";
    }
}
changeNumber(input_number);
//Logic Sections Above

// Test Section Below
console.log("Hello World")



function mEqualsOneThousand() {
    changeNumber(1000);
    console.log(result);
    if (result == "M"){
    console.log("mEqualsOneThousand passed");
    }else{ 
        (console.log("mEqualsOneThousand failed"));
    }
}

mEqualsOneThousand();

function dEqualsFiveHundred() {
    changeNumber(500);
    console.log(result);
    if (result == "D"){
    console.log("dEqualsFiveHundred passed");
    }else{ 
        (console.log("dEqualsFiveHundred failed"));
    }
}

dEqualsFiveHundred();

function cEqualsOneHundred() {
    changeNumber(100);
    console.log(result);
    if (result == "C"){
    console.log("cEqualsOneHundred passed");
    }else{ 
        (console.log("cEqualsOneHundred failed"));
    }
}

cEqualsOneHundred();

function xEqualsTen() {
    changeNumber(10);
    console.log(result);
    if (result == "X"){
    console.log("xEqualsTen passed");
    }else{ 
        (console.log("xEqualsTen failed"));
    }
}

xEqualsTen();

function vEqualsFive() {
    changeNumber(5);
    console.log(result);
    if (result == "V"){
    console.log("vEqualsFive passed");
    }else{ 
        (console.log("vEqualsFive failed"));
    }
}

vEqualsFive();

function iEqualsOne() {
    changeNumber(1);
    console.log(result);
    if (result == "I"){
    console.log("iEqualsOne passed");
    }else{ 
        (console.log("iEqualsOne failed"));
    }
}

iEqualsOne();



// Test Section Above