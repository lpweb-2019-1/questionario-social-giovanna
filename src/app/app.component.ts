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
  pessoas = [];
  nome = null;
  sexo = ['Feminino',
    'Masculino'];
  sexoSelecionado = null;
  idade = null;
  cidadeSelecionada = null;

  salvar(form) {
     this.Pessoas.salvar(this.nome, this.sexo, this.idade, this.cidade);
     form.reset();
    }

  
}
