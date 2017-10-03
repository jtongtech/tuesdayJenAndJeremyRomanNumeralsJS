var result = "";
var input_number = 1000;

//Logic Section Below
function changeNumber(input_number){
    if(input_number == 1000){
        result = "M";
    }
}
changeNumber(1000);
//Logic Sections Above

// Test Section Below
console.log("Hello World")



function mEqualsOneThousand() {
    console.log(result);
    if (result == "M"){
    console.log("mEqualsOneThousand passed");
    }else{ 
        (console.log("mEqualsOneThousand failed"));
    }
}

mEqualsOneThousand();

// Test Section Above