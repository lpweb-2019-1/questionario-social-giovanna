import { Component } from '@angular/core';
import {PessoaService} from './pessoa.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = null;
  sexo = null;
  idade = null;
  cidade = null; 
  cidades = ['Palmas','Paraíso','Porto Nacional','Brasília','Goiânia'];

  constructor(private Pessoas : PessoaService){}

  salvar(form) {
     this.Pessoas.salvar(this.nome, this.sexo, this.idade, this.cidade);
     form.reset();
    }

  
}
