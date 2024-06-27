let valorTotal = 0;
let textoValorTotal = document.getElementById("valor-total");
let listaProdutos = document.getElementById("lista-produtos");
limpar();

function adicionar() {
  //recuperar valores nome do produto, quantidade e valor
  let produto = document.getElementById("produto").value;
  let nomeProduto = produto.split("-")[0];
  let valorProduto = produto.split("$")[1];
  let quantidade = document.getElementById("quantidade").value;

  //calcular subtotal dos itens
  let subtotalProduto = parseInt(valorProduto * quantidade);

  //adicionar produto no carrinho
  listaProdutos.innerHTML =
    listaProdutos.innerHTML +
    `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subtotalProduto}</span>
        </section>`;

  //atualizar valor total
  valorTotal = valorTotal + subtotalProduto;
  textoValorTotal.innerHTML = `R$ ${valorTotal}`;
  document.getElementById("quantidade").value = 0;
}

function limpar() {
  valorTotal = 0;
  textoValorTotal.innerHTML = `R$ 0`;
  listaProdutos.innerHTML = ``;
}
