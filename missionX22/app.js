/*
  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
*/

const spiel = {
  spielfeld: [
    "###############",
    "#             #",
    "#             #",
    "#             #",
    "#    ####     #",
    "#    ####     #",
    "#             #",
    "#             #",
    "#             #",
    "###############",
  ],
  schlange: {
    teile: [
      { x: 4, y: 2 },
      { x: 3, y: 2 },
      { x: 2, y: 2 },
    ],
    richtung: "O",
  },
};

const grafik = {
  groesseQuadrat: 30,
  zeichneSpielfeld: function (ctx) {
    let y = 0;
    spiel.spielfeld.forEach(function pruefeZeile(string) {
      zeile = string.split("");
      let x = 0;
      zeile.forEach(function pruefeZeichen(zeichen) {
        if (zeichen == "#") {
          ctx.fillStyle = "black";
          ctx.fillRect(x, y, grafik.groesseQuadrat, grafik.groesseQuadrat);
        }
        x += grafik.groesseQuadrat;
      });
      y += grafik.groesseQuadrat;
    });
  },
  zeichneSchlange: function (ctx) {
    spiel.schlange.teile.forEach(function zeichneTeile(teil) {
      const teilXOrt = teil.x * grafik.groesseQuadrat;
      const teilYOrt = teil.y * grafik.groesseQuadrat;
      ctx.fillStyle = "green";
      ctx.fillRect(
        teilXOrt,
        teilYOrt,
        grafik.groesseQuadrat,
        grafik.groesseQuadrat
      );
    });
  },
  zeichneSpiel: function () {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    grafik.zeichneSpielfeld(ctx);
    grafik.zeichneSchlange(ctx);
  },
};

function zeichne() {
  grafik.zeichneSpiel();
}

function loesche() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, 512, 512);
}
