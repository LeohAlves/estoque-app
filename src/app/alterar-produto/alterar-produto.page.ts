import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../services/produto.service';
import { Produto } from '../models/Produto.model';
import { __param } from 'tslib';

@Component({
  selector: 'app-alterar-produto',
  templateUrl: './alterar-produto.page.html',
  styleUrls: ['./alterar-produto.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class AlterarProdutoPage implements OnInit {
  id = 0;
  titulo = '';
  descricao = '';
  preco = 0;
  nome_imagem = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutoService
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.produtoService.getOne(this.id).subscribe((retorno) => {
      this.titulo = retorno.titulo!;
      this.descricao = retorno.descricao!;
      this.preco = retorno.preco!;
      this.nome_imagem = retorno.nome_imagem!;
    })
  }
  salvar() {
    const produto: Produto = {
      id: this.id,
      titulo: this.titulo,
      descricao: this.descricao,
      preco: this.preco,
      nome_imagem: this.nome_imagem,
    };
    this.produtoService.update(produto).subscribe((dados) => {
      alert('Produto atualizado com sucesso: ' + dados.id);
      this.router.navigateByUrl('/produto');
    });
  }
}
