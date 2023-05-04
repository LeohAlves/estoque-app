import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cliente } from '../models/Cliente.model';
import { ClientesService } from '../services/clientes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { __param } from 'tslib';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-alterar-cliente',
  templateUrl: './alterar-cliente.page.html',
  styleUrls: ['./alterar-cliente.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AlterarClientePage implements OnInit {
  id = 0;
  nome = ''
  email = ''
  senha = ''
  confirmaSenha = ''

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private clientesService :ClientesService)  { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.clientesService.getOne(this.id).subscribe(retorno => {
      this.nome = retorno.nome as string; // também se pode usar this.nome = retorno.nome! para garantir que o resultado terá um valor 
      this.email = retorno.email ? retorno.email: '';
    })
  }

  salvar(){
    if (this.senha === this.confirmaSenha && this.senha != '')
    {console.log(this.nome)
      const cliente: Cliente = {
        id: this.id,
        nome: this.nome,
        email: this.email,
        senha: this.senha
      }
      this.clientesService.update(cliente).subscribe(dados =>{
        alert('Cliente atualizado com sucesso: ' + dados.id)
        //navegaçao aqui
        this.router.navigateByUrl('/home');
        // this.route.navigate(['/home']);
      });

      //Nunca colocar a navegaçao fora.. vai voltar sem saber a resposta
    }else {
      alert('Senhas não conferem')
    }
  }

  

}
