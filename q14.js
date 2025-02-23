let email = "user@example.com" ;
let pass = "123456" ;

if(email === "user@example.com" && pass === "123456"){
    console.log(`Welcome User`)
}else if(email === "user@example.com" || pass === "123456"){
    if(email !== "user@example.com"){
        console.log(`Invalid Email`)
    }else if(pass !== "123456"){
        console.log(`Invalid Password`)
    }
}