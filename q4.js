var year = 5070 ;

if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
    console.log(`${year} is LeepYear`);
} else{
    console.log(`${year} is not LeepYear`); 
}