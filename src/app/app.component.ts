import { Component } from '@angular/core';
import { NgModuleFactory } from '@angular/core/src/render3';
import {PessoaService} from './pessoa.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private Pessoas : PessoaService){

  }
  nome = null;
  sexo = null;
  idade = null;
  cidade = null; 
  cidades = ['Palmas','Paraíso','Porto Nacional','Brasília','Goiânia'];

  salvar(form) {
     this.Pessoas.salvar(this.nome, this.sexo, this.idade, this.cidade);
     form.reset();
    }

  
}
