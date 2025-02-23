var x = 228, y = 67, z = 108;

if( x > y, x > z){
    console.log(`Number ${x} is Largest`);
}

else if(y > x, y > z){
    console.log(`Number ${y} is Largest`);
} else{
    console.log(`Number ${z} is Largest`);
}

// AnOther Way----------->

let LargNumber = Math.max(x, y, z);
console.log(`Number ${LargNumber} is Largest`);