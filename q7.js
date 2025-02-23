let month = "february";
let year = 2028 ;

if (month === `january` || month === `march` || month === `may` || month === `july` || month === `august` || month === `october` || month === `december`){
    console.log(`${year} "${month}" is 31 days`);
}else if(month === `april` || month === `june` || month === `september` || month === `november`){
    console.log(`${year} "${month}" is 30 days`)
}else if(month === "february"){
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
        console.log(`${year} is Leap Year and ${month} is 29 days.`);
    } else{
        console.log(`${year} is not Leap Year and ${month} is 28 days.`); 
    }
}else{
    console.log(`Opps!! "Please Check your spelinng and write a valid month name. Thank you.`)
}


