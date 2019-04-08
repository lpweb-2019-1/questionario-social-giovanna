import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pessoas = [];
  nome = null;
  sexo = ['Feminino',
    'Masculino'];
  sexoSelecionado = null;
  idade = null;
  cidade = ['Palmas','Paraíso','Porto Nacional','Brasília','Goiânia']
  cidadeSelecionada = null;

  salvar() {
      const pessoa = {
        id: this.pessoas.length ,
        nome: this.nome ,
        sexo: this.sexoSelecionado,
        idade: this.idade,
        cidade: this.cidadeSelecionada,
    };
    this.pessoas.push(pessoa);
    this.nome = null,
    this.sexo = null,
    this.idade = null,
    this.cidade = null
    }

  pessoa_mais_velha(){
    
  }
};
