// we have to create two inputs, take two numbers. 
// create a button -> to add the numbers.
// show the result in to another html component. 

function num1Onchange() {
    document.getElementById("num1ErroMsg").innerHTML = "";
}

function num2Onchange() {
    document.getElementById("num2ErroMsg").innerHTML = "";
}


function addFunction() {

    document.getElementById("num1ErroMsg").innerHTML = "";
    document.getElementById("num2ErroMsg").innerHTML = "";

    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let isError = false;

    if (num1 == "") {
        document.getElementById("num1ErroMsg").innerHTML = "You need to enter the number mandatorily."
        isError = true;
    }

    if (num2 == "") {
        document.getElementById("num2ErroMsg").innerHTML = "You need to enter the number mandatorily."
        isError = true;
    }

    if (num1!="" && isNaN(Number(num1))) {
        document.getElementById("num1ErroMsg").innerHTML = "Only numbers are allowed here."
        isError = true;
    }

    if (num2!="" && isNaN(Number(num2))) {
        document.getElementById("num2ErroMsg").innerHTML = "Only numbers are allowed here."
        isError = true;
    }

    if(Number(num1)<-100000000 || Number(num1)>100000000) {
        document.getElementById("num1ErroMsg").innerHTML = "Number should be in range -10^9 to 10^9"
        isError = true;
    }

    if(Number(num2)<-100000000 || Number(num2)>100000000) {
        document.getElementById("num2ErroMsg").innerHTML = "Number should be in range -10^9 to 10^9"
        isError = true;
    }

    if (isError === true) return;

    let sum = Number(num1) + Number(num2);

    let sumOutput = document.createElement("p");
    sumOutput.innerHTML = sum;
    sumOutput.classList.add("grrenColour");

    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";

    document.body.appendChild(sumOutput);
}
