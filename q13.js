let AccountBalance = 10000;
let WithdrawBalance = 10050;

if(AccountBalance >= WithdrawBalance){
    if(WithdrawBalance <= 500){
        console.log(`Minimum withdrawal is 500`)
    }else{
        console.log(`Transection Successful`);
    }   
}else if(AccountBalance < WithdrawBalance){
    console.log(`Insufficient Balance`);
}