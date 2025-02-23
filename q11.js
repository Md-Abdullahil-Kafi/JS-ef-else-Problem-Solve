let price = 100;

if(price >= 500){
    let AfterDiscount = (price * 20) / 100 ;
    console.log(`Before Discount ${price} and After 20% Discount ${price - AfterDiscount}`)
} else if(price >= 200 && price < 500){
    let AfterDiscount = (price * 10) / 100 ;
    console.log(`Before Discount ${price} and After 10% Discount ${price - AfterDiscount}`)
}else{
    console.log(`Opps!! So sorry.. No Discount Available.`)
}