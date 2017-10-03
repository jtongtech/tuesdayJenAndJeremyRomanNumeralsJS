var result = "";
var input_number = 0;

//Logic Section Below
function changeNumber(input_number){
    if(input_number == 1000){
        result = "M";
    } else if (input_number == 500){
        result = "D";
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

// Test Section Above