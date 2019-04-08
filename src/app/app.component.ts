import { Component } from '@angular/core';
import { NgModuleFactory } from '@angular/core/src/render3';

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
    this.idade = null
    }

  pessoa_mais_velha(){
    var maior_idade = 0;
    var pessoa_mais_velha;
    for(let pessoa of this.pessoas){
      if(pessoa.idade > maior_idade){
        maior_idade = pessoa.idade
        pessoa_mais_velha = pessoa.nome
      }
    }
    return pessoa_mais_velha
  }

  pessoa_mais_nova(){
    var menor_idade = 9999999;
    var pessoa_mais_nova;
    for(let pessoa of this.pessoas){
      if(pessoa.idade < menor_idade){
        menor_idade = pessoa.idade
        pessoa_mais_nova = pessoa.nome
      }
    }
    return pessoa_mais_nova
  }

  media_idade_mulheres(){
    var soma = 0;
    var total = 0;
    for(let pessoa of this.pessoas){
      if(pessoa.sexoSelecionado == 'Feminino'){
        soma += pessoa.idade
        total += 1
      }
    }
    return soma/total
  }

  media_idade_homens(){
    var soma = 0;
    var total = 0;
    for(let pessoa of this.pessoas){
      if(pessoa.sexoSelecionado == 'Masculino'){
        soma += pessoa.idade
        total += 1
      }
    }
    return soma/total
  }

  media_idade_por_cidade(cidade){
    var soma = 0;
    var total = 0;
    for(let pessoa of this.pessoas){
      if(pessoa.cidadeSelecionada == cidade){
        soma += pessoa.idade
        total += 1
      }
    }
    return soma/total
  }

  porc_sexo_por_cidade(cidade){
    var fem = 0;
    var masc = 0;
    var total = 0;
    for(let pessoa of this.pessoas){
      if(pessoa.cidadeSelecionada == cidade){
        if(pessoa.sexoSelecionado == 'F'){
          fem += 1
        }else{
          masc += 1
        }
        total += 1
      }
    }
    return 'Feminino:'+fem/total*100+'%'+' Masculino:'+masc/total*100+'%'
  }
}
