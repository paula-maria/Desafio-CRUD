// URL base da API
const API_URL = '/api/produtos';

// Elementos do DOM
const form = document.getElementById('produtoForm');
const nomeInput = document.getElementById('nome');
const descricaoInput = document.getElementById('descricao');
const precoInput = document.getElementById('preco');
const quantidadeInput = document.getElementById('quantidade');
const idInput = document.getElementById('produtoId');
const produtosBody = document.getElementById('produtosBody');
const messageDiv = document.getElementById('message');
const formTitle = document.getElementById('form-title');
const cancelBtn = document.getElementById('cancelBtn');
const searchInput = document.getElementById('searchInput');

// ---------- EXIBIR MENSAGENS ----------
function showMessage(text, type = 'success') {
  messageDiv.textContent = text;
  messageDiv.className = `message ${type}`;
  messageDiv.classList.remove('hidden');
  setTimeout(() => messageDiv.classList.add('hidden'), 3000);
}

// ---------- LISTAR PRODUTOS ----------
async function listarProdutos() {
  try {
    const response = await fetch(API_URL);
    const produtos = await response.json();

    produtosBody.innerHTML = '';

    if (!produtos.length) {
      produtosBody.innerHTML = '<tr><td colspan="6" style="text-align:center;">Nenhum produto encontrado.</td></tr>';
      return;
    }

    produtos.forEach((produto) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${produto.id}</td>
        <td>${produto.nome}</td>
        <td>${produto.descricao || '-'}</td>
        <td>R$ ${Number(produto.preco).toFixed(2)}</td>
        <td>${produto.quantidade}</td>
        <td class="actions">
          <button class="secondary" onclick="editarProduto(${produto.id})">Editar</button>
          <button class="delete" onclick="excluirProduto(${produto.id})">Excluir</button>
        </td>
      `;
      produtosBody.appendChild(tr);
    });
  } catch (error) {
    showMessage('Erro ao carregar produtos.', 'error');
    console.error(error);
  }
}

// ---------- CADASTRAR / ATUALIZAR PRODUTO ----------
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const id = idInput.value;
  const nome = nomeInput.value.trim();
  const descricao = descricaoInput.value.trim();
  const preco = parseFloat(precoInput.value);
  const quantidade = parseInt(quantidadeInput.value);

  if (!nome || preco <= 0 || quantidade < 0) {
    showMessage('Preencha todos os campos obrigatórios corretamente.', 'error');
    return;
  }

  const produto = { nome, descricao, preco, quantidade };

  try {
    const response = await fetch(id ? `${API_URL}/${id}` : API_URL, {
      method: id ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(produto),
    });

    if (!response.ok) throw new Error('Erro ao salvar produto.');

    showMessage(id ? 'Produto atualizado com sucesso!' : 'Produto adicionado com sucesso!');
    form.reset();
    idInput.value = '';
    formTitle.textContent = 'Cadastrar Produto';
    cancelBtn.classList.add('hidden');
    listarProdutos();
  } catch (error) {
    showMessage('Erro ao salvar produto.', 'error');
  }
});

// ---------- EDITAR PRODUTO ----------
async function editarProduto(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) throw new Error('Produto não encontrado.');

    const produto = await response.json();

    idInput.value = produto.id;
    nomeInput.value = produto.nome;
    descricaoInput.value = produto.descricao;
    precoInput.value = produto.preco;
    quantidadeInput.value = produto.quantidade;

    formTitle.textContent = 'Editar Produto';
    cancelBtn.classList.remove('hidden');
  } catch (error) {
    showMessage('Erro ao carregar produto.', 'error');
  }
}

// ---------- EXCLUIR PRODUTO ----------
async function excluirProduto(id) {
  if (!confirm('Deseja realmente excluir este produto?')) return;

  try {
    const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    if (!response.ok) throw new Error('Erro ao excluir produto.');
    showMessage('Produto excluído com sucesso!');
    listarProdutos();
  } catch (error) {
    showMessage('Erro ao excluir produto.', 'error');
  }
}

// ---------- CANCELAR EDIÇÃO ----------
cancelBtn.addEventListener('click', () => {
  form.reset();
  idInput.value = '';
  formTitle.textContent = 'Cadastrar Produto';
  cancelBtn.classList.add('hidden');
});

// ---------- PESQUISAR PRODUTOS ----------
async function pesquisarProdutos() {
  const termo = searchInput.value.trim().toLowerCase();
  if (!termo) return listarProdutos();

  try {
    const response = await fetch(API_URL);
    const produtos = await response.json();

    const filtrados = produtos.filter(p => 
      p.nome.toLowerCase().includes(termo)
    );

    produtosBody.innerHTML = '';

    if (!filtrados.length) {
      produtosBody.innerHTML = '<tr><td colspan="6" style="text-align:center;">Nenhum produto encontrado.</td></tr>';
      return;
    }

    filtrados.forEach((produto) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${produto.id}</td>
        <td>${produto.nome}</td>
        <td>${produto.descricao || '-'}</td>
        <td>R$ ${Number(produto.preco).toFixed(2)}</td>
        <td>${produto.quantidade}</td>
        <td class="actions">
          <button class="secondary" onclick="editarProduto(${produto.id})">Editar</button>
          <button class="delete" onclick="excluirProduto(${produto.id})">Excluir</button>
        </td>
      `;
      produtosBody.appendChild(tr);
    });
  } catch (error) {
    showMessage('Erro ao pesquisar produtos.', 'error');
  }
}

// ---------- CARREGAR AO INICIAR ----------
listarProdutos();

async function exportarExcel() {
  try {
    const response = await fetch(API_URL);
    const produtos = await response.json();

    if (produtos.length === 0) {
      alert("Não há produtos para exportar.");
      return;
    }

    const dados = produtos.map(p => ({
      ID: p.id,
      Nome: p.nome,
      Descrição: p.descricao || "",
      "Preço (R$)": Number(p.preco).toFixed(2).replace('.', ','),
      Quantidade: p.quantidade
    }));

    const worksheet = XLSX.utils.json_to_sheet(dados);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Produtos");

    XLSX.writeFile(workbook, "produtos.xlsx");
  } catch (error) {
    console.error("Erro ao exportar:", error);
    alert("Erro ao gerar o arquivo Excel.");
  }
}
