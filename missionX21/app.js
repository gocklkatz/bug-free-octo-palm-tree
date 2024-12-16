var akutellerSpieler = "O";
var gewonnen = false;

function setze(element) {
  if (element.innerText != "" || gewonnen) return;

  element.innerText = akutellerSpieler;

  if (akutellerSpieler == "O") {
    akutellerSpieler = "X";
  } else {
    akutellerSpieler = "O";
  }

  pruefeSpielfeld();
}

function pruefeSpielfeld() {
  for (var i = 0; i < 3; i++) {
    pruefeGewonnen("0_" + i, "1_" + i, "2_" + i);
  }
  for (var i = 0; i < 3; i++) {
    pruefeGewonnen(i + "_0", i + "_1", i + "_2");
  }
  pruefeGewonnen("0_0", "1_1", "2_2");
  pruefeGewonnen("0_2", "1_1", "2_0");
}

function pruefeGewonnen(coord1, coord2, coord3) {
  var erstes = document.getElementById(coord1).innerText;
  var zweites = document.getElementById(coord2).innerText;
  var drittes = document.getElementById(coord3).innerText;

  if (erstes == "") return;
  if (erstes == zweites && erstes == drittes) {
    document.getElementById("displayWin").innerText = "Spieler "+ (akutellerSpieler == "O" ? "X" : "O") + " hat gewonnen!";
    gewonnen = true;
  }
}

function reset() {
  akutellerSpieler = "O";
  gewonnen = false;
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      document.getElementById(i+"_"+j).innerText = "";
    }
  }
  document.getElementById("displayWin").innerText = "";
}
