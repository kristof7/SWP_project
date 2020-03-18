debugger;
var number1 = 0;
var number2 = number1 + 4;
var wasUserLogged = false;


for (var i = 0; i < 5; i++) {
    console.log(number1);
}
for (var i = 0; i < 5; i++) {
    console.log("Wykonałem się "+i+" razy");
}

var colors = {
    red: "red",
    blue: "blue",
    white: "white",
}

var element = window.document.getElementById("whatever");
element.innerHTML = "Coś innego niż cokolwiek";