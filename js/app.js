function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-') [0];
    let valorUnitario = produto.split('R$') [1];
    let quantidade = document.getElementById('quantidade');
    alert(`Nome do produto: ${nomeProduto}`);
    alert(`valor: ${valorUnitario}`);
    alert(`Quantidade: ${quantidade.value}`);
    let precoProduto = valorUnitario * quantidade.value;
    alert(`Subtotal: ${precoProduto}`);
}

function limpar() {

}