import { Produto } from './../models/Produto.model';
import { Component, OnInit } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-create-produto',
  templateUrl: './create-produto.page.html',
  styleUrls: ['./create-produto.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class CreateProdutoPage implements OnInit {
  titulo = '';
  descricao = '';
  preco: number | undefined;
  nome_imagem = '';

  constructor(private route: Router, private produtoService: ProdutoService) {}

  ngOnInit() {}
  salvar() {
    if (this.preco != undefined) {
      console.log(this.titulo);
      const produto: Produto = {
        titulo: this.titulo,
        descricao: this.descricao,
        preco: this.preco,
        nome_imagem: this.nome_imagem,
      };
      this.produtoService.create(produto).subscribe((dados) => {
        alert('proditp Inserido com sucesso: ' + dados.id);
        //navegaçao aqui
        this.route.navigateByUrl('/produto');
        // this.route.navigate(['/home']);
      });

      //Nunca colocar a navegaçao fora.. vai voltar sem saber a resposta
    } else {
      alert('nescessario preço não conferem');
    }
  }
}
