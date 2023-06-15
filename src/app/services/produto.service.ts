import { Injectable } from '@angular/core';
import { IProduto, produtos } from '../produtos/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  produto: IProduto[] = produtos;

  constructor() { }

  getAll() {
    return this.produto;
  }

  getOne(produtoId: number) {
    return this.produto.find(produto => produto.id === produtoId);
  }

  getByDescription(description: string) {
    return this.produto.find(produto => produto.descricao === description);
  }
}
