let copas = [1959, 1962, 1970, 1994, 2002];

for(let i = 0; i < copas.length; i++){
    console.log(`O Brasil ganhou as copas de ${copas[i]}`);
}

// ----------

let frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];

for(let i = 0; i < frutas.length; i++){
    if(frutas[i] === 'Pera'){
        break;
    }
    console.log(frutas[i]);
}

let melancia = frutas[4];
console.log(melancia);