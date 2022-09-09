
const graph = document.getElementById('rollsGraph');
const rollTimes = document.getElementById('rollTimes');
const rollMany  = document.getElementById('rollMany');

// Rolar um único dado de 6 faces
function rollDice() {
   let roll = Math.random();
 
   if (roll <= (1 / 6) * 1) { return 1};
   if (roll <= (1 / 6) * 2) { return 2};
   if (roll <= (1 / 6) * 3) { return 3};
   if (roll <= (1 / 6) * 4) { return 4};
   if (roll <= (1 / 6) * 5) { return 5};
   if (roll <= (1 / 6) * 6) { return 6};
}

// Rolar um par de dados de 6 faces
function rollTwice(){
   d1 = rollDice();
   d2 = rollDice();
   pair  = d1 + d2;

   return [pair, d1, d2];
}

// Rolar vários pares de dados de 6 faces
function rollTwicesX(y){
   let times = 0;
   graph.innerHTML = ""
   while(times < y){
      times ++
      let roll = rollTwice();
      toHTML(roll, times)
   }
}

console.log(`Comandos
1. rollDice()
2. rollTwice()
3. rollTwicesX(número)
`);



// add rolls to html graph
function toHTML(x, time){
   let div = document.createElement('div');
   div.innerHTML = `<span>${time}</span> <hr>`;
   div.classList.add(`${dice[x[0]]}`)
   graph.append(div);
}

let dice = {
   1: 'um',
   2: 'dois',
   3: 'tres',
   4: 'quatro',
   5: 'cinco',
   6: 'seis',
   7: 'sete',
   8: 'oito',
   9: 'nove',
   10: 'dez',
   11: 'onze',
   12: 'doze'
}

rollMany.addEventListener("click", () => {
   let x = Number(rollTimes.value)
   rollTwicesX(x)
   rollTimes.value = "";
});