const diceONE = document.getElementById('d1');
const diceTWO = document.getElementById('d2');
const roll2  = document.getElementById('roll2');
const diceX = document.getElementById('dice');
const roll1  = document.getElementById('roll1');

let diceImg = {
   1: './dices/d1.jpg',
   2: './dices/d2.jpg',
   3: './dices/d3.jpg',
   4: './dices/d4.jpg',
   5: './dices/d5.jpg',
   6: './dices/d6.jpg',
}

function oneDice() {
   let roll = Math.random();
   var r = 0
   if (roll <= (1 / 6) * 1) { r = 1; console.log(`roll: ${r}`); diceX.src = `${diceImg[r]}`; return r;};
   if (roll <= (1 / 6) * 2) { r = 2; console.log(`roll: ${r}`); diceX.src = `${diceImg[r]}`; return r;}
   if (roll <= (1 / 6) * 3) { r = 3; console.log(`roll: ${r}`); diceX.src = `${diceImg[r]}`; return r;}
   if (roll <= (1 / 6) * 4) { r = 4; console.log(`roll: ${r}`); diceX.src = `${diceImg[r]}`; return r;}
   if (roll <= (1 / 6) * 5) { r = 5; console.log(`roll: ${r}`); diceX.src = `${diceImg[r]}`; return r;}
   if (roll <= (1 / 6) * 6) { r = 6; console.log(`roll: ${r}`); diceX.src = `${diceImg[r]}`; return r;}
}


// Rolar um par de dados de 6 faces
function doubleDice(){
   d1 = rollDice();
   d2 = rollDice();
   pair  = d1 + d2;

   diceONE.src = `${diceImg[d1]}`
   diceTWO.src = `${diceImg[d2]}`

   console.log(`Rolled: ${d1} + ${d2} = ${pair}`);
   return [pair, d1, d2];
}

roll2.addEventListener("click", () => {
   doubleDice();
})

roll1.addEventListener("click", () => {
   oneDice();
})