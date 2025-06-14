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

// -----------

const listaDeCompras = ['Pão', 'Leite', 'Ovos', 'Café'];

listaDeCompras.forEach((item) => {
    console.log(`Item: ${item}`);
});


// ----------

const numeros = [20, 30, 40, 50, 60];
let soma = 0;

numeros.forEach((item, index) => {
    console.log(`[${index}]: ${item}`);
    soma = soma + item;
});
console.log(soma);

// ---------

let vestuario = 0;
let eletronicos = 0;
let eletrodomesticos = 0;

const produtos = [
    {nome: 'Camisa', categoria: 'Vestuário'},
    {nome: 'Notebook', categoria: 'Eletrônicos'},
    {nome: 'Smartphone', categoria: 'Eletrônicos'},
    {nome: 'Calça', categoria: 'Vestuário'},
    {nome: 'Geladeira', categoria: 'Eletrodomésticos'},
];

produtos.forEach((item) => {
    if(item.categoria === 'Vestuário'){
        vestuario += 1;
    }else if(item.categoria === 'Eletrônicos'){
        eletronicos += 1;
    }else{
        eletrodomesticos += 1;
    }
});

console.log(`Vestuário: ${vestuario}`);
console.log(`Eletrônicos: ${eletronicos}`);
console.log(`Eletrodomésticos: ${eletrodomesticos}`);