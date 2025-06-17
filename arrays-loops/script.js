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

// ------------

const numeros2 = [2, 4, 6, 8];

const numerosDobrado = numeros2.map(item => item * 2);
console.log(numerosDobrado);

// --------------

const nomes = ['Maria', 'João', 'Ana'];

const nomesObjeto = nomes.map(item => {
    return {nome: `${item}`, tamanho: `${item.length}`}
});

console.log(nomesObjeto);


// ----------------------

const produtos2 = [
  { nome: 'Camiseta', preco: 49.9 },
  { nome: 'Tênis', preco: 199.99 },
  { nome: 'Boné', preco: 29.5 }
];

const produtosReais = produtos2.map(item => {
    return `${item.nome} - R$ ${item.preco.toFixed(2).replace('.', ',')}`
})

console.log(produtosReais);


// -----------------------


const numeros3 = [1,2,3,4];

const soma2 = numeros3.reduce((acumulador, valorAtual) => {
    const total = acumulador + valorAtual;
    
    return total;
});

console.log(soma2);


// -----------------------

// 3.516,8
const produtos3 = [
  {
    nome: 'Camiseta',
    preco: 49.90,
    quantidade: 15,
    descricao: 'Camiseta 100% algodão, disponível em várias cores.'
  },
  {
    nome: 'Boné',
    preco: 29.50,
    quantidade: 20,
    descricao: 'Boné ajustável com proteção UV.'
  },
  {
    nome: 'Calça Jeans',
    preco: 119.90,
    quantidade: 10,
    descricao: 'Calça jeans tradicional com lavagem clara.'
  },
  {
    nome: 'Mochila',
    preco: 139.90,
    quantidade: 7,
    descricao: 'Mochila resistente com vários compartimentos.'
  }
];

const faturamentoTotal = produtos3.reduce((acumulador, produto) => {
    return faturamento = acumulador + (produto.preco * produto.quantidade);
}, 0);

console.log(faturamentoTotal);