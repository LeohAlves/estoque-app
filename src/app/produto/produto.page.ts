import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Produto } from '../models/Produto.model';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProdutoPage {
  listaProdutos: Produto[] = [];

  constructor(private produtoServices: ProdutoService) {
    this.buscarProdutos();
   }

  buscarProdutos() {
    this.produtoServices.getAll().subscribe(dados => {
      this.listaProdutos = dados as Produto[];
    });
  }

}
