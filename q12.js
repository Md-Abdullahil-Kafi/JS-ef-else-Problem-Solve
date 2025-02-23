let pass = "";

if(pass === "Admin@123"){
    console.log(`Login Successful`);
}else if(pass === "" || pass === null){
    console.log("Password cannot be empty");
}else{
    console.log("Incorrect Password");
}