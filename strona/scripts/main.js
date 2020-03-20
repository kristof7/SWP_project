var element = window.document.getElementById("whatever");
element.innerHTML = "Coś innego niż cokolwiek";

function nowyBobr() {
    var col = document.getElementById("whatever");
    var btn = document.createElement("button");
    btn.innerText = "Nowy bobr";
    col.appendChild(btn);
  }

  var i = 1;

  function dodajInformacje() {
    var nazwaRamki = "informacja" + i;
    try {
      var ramka = document.getElementById(nazwaRamki);
      console.log(ramka.innerHTML);
      ramka.innerHTML = "Informacja nr "+ i;
      throw " jakis blad";
    } catch(err) {
      console.log("Wystapil blad!");
      var inf = document.createElement("button");
      inf.setAttribute('id', nazwaRamki);
      var informacje = document.getElementById("informacje");
      informacje.appendChild(inf);
    }
  }