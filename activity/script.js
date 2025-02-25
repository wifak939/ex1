//select elements
let number1 = document.getElementById("number1"); //string
let number2 = document.getElementById("number2");
let btn = document.getElementById("btn");
let result = document.getElementById("result");

//confirm the elements deffeerent from null
// if(!number1 && !number2){
//     alert("number1 not found");
// }
console.log(typeof(number1.value));

//function
btn.addEventListener("click", function(){
    number1 = Number(number1.value)
    number2 = Number(number2.value);
    let some = number1 + number2;
    console.log(typeof(number1.value));
    console.log(typeof(number2.value));

    result.innerHTML = some;
})