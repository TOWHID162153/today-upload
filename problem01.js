// # Problem-01 : Calculate the cash-out Charge 
// # Problem 01 solve : 
function cashOut(money){
    if(money >= 0 && money === Number(+ money)){
        let chargeAmount = money * 1.75 / 100;
        return chargeAmount;
    }
    else{
        return "Invalid";
    } 
}

// cashOut(2000);
// cashOut(100);
// cashOut(999);
// cashOut(-350);
// cashOut(0);
// cashOut("101");
// cashOut("mewauu");

// ---- Done ---- //