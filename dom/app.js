const realValue = document.querySelector('input');
const h2 = document.querySelector('.dolarConvert');

function convert(){
    const dolar = 5.57;
    const valueConvert = realValue.value * dolar;
    h2.innerHTML = `Valor em dólar: R$ ${valueConvert}`;
}