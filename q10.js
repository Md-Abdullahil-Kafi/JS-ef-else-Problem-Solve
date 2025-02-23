let day = "sundey";

if(day === "saturday" || day === "sunday"){
    console.log(`It's Holiday. Enjoy your day with your favourite task.`);
}else if(day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday"){
    console.log(`Ohh!! No. It's Working Day.`)
}else{
    console.log(`Opps!! Something went wrong. Please check make sure the day that you entered "Saturday" like that.`)
}