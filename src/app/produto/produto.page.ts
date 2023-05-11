import { Produto } from './../models/Produto.model';
import { CommonModule, } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';
import { ProdutoService } from '../services/produto.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink,],
})
export class ProdutoPage  {
  listaProdutos: Produto[] = [];

  constructor(
    private produtoServices: ProdutoService,
    private router: Router
  ) {}

  ionViewWillEnter() {
    this.buscarProdutos();
  }

  ngOnInit() {}
  buscarProdutos() {
    this.produtoServices.getAll().subscribe((dados) => {
      this.listaProdutos = dados as Produto[];
    });
  }

  alterarProduto(id: number) {
    this.router.navigateByUrl(`/alterar-produto/${id}`);
  }

  excluirProduto(id: number) {}
}
