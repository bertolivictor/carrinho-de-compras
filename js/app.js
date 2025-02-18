let totalCarrinho
limpar();

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-') [0];
    let valorUnitario = produto.split('R$') [1];
    let quantidade = document.getElementById('quantidade').value;
    let precoProduto = valorUnitario * quantidade;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${precoProduto}</span>
    </section>`
    totalCarrinho = totalCarrinho + precoProduto;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$${totalCarrinho}`;
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0';
    totalCarrinho = 0;
}