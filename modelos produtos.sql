const db = require('../database/database');

class Produto {
  // Listar todos os produtos
  static listarTodos(callback) {
    const sql = 'SELECT * FROM produtos ORDER BY criado_em DESC';
    db.all(sql, [], callback);
  }

  // Buscar produto por ID
  static buscarPorId(id, callback) {
    const sql = 'SELECT * FROM produtos WHERE id = ?';
    db.get(sql, [id], callback);
  }

  // Pesquisar produtos por nome (pesquisa parcial)
  static pesquisarPorNome(termo, callback) {
    const sql = 'SELECT * FROM produtos WHERE nome LIKE ? ORDER BY nome';
    db.all(sql, [`%${termo}%`], callback);
  }

  // Criar novo produto
  static criar(produto, callback) {
    const { nome, descricao, preco, quantidade } = produto;
    const sql = `
      INSERT INTO produtos (nome, descricao, preco, quantidade) 
      VALUES (?, ?, ?, ?)
    `;
    db.run(sql, [nome, descricao, preco, quantidade], function(err) {
      callback(err, this.lastID);
    });
  }

  // Atualizar produto
  static atualizar(id, produto, callback) {
    const { nome, descricao, preco, quantidade } = produto;
    const sql = `
      UPDATE produtos 
      SET nome = ?, descricao = ?, preco = ?, quantidade = ?, atualizado_em = CURRENT_TIMESTAMP 
      WHERE id = ?
    `;
    db.run(sql, [nome, descricao, preco, quantidade, id], callback);
  }

  // Excluir produto
  static excluir(id, callback) {
    const sql = 'DELETE FROM produtos WHERE id = ?';
    db.run(sql, [id], callback);
  }
}

module.exports = Produto;