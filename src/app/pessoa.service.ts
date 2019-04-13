import { Injectable } from '@angular/core';
import {AppComponent} from './app.component';

@Injectable({
  providedIn: 'root'  
})
export class PessoaService {
pessoas = [];
  constructor() {this.pessoas = []}
  salvar(nome: string, idade: number, sexo: string, cidade: string) {
    const pessoa = {
      nome,
      sexo,
      idade,
      cidade,
  };
  this.pessoas.push(pessoa);
  localStorage.setItem("pessoas", JSON.stringify(this.pessoas))
  };

  cidade(){
    return this.cidade
  }

  pessoa_mais_velha(){
    var maior_idade = 0;
    var pessoa_mais_velha;
    let pessoas = JSON.parse(localStorage.getItem("pessoas"))
    for(let pessoa of pessoas){
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
    let pessoas = JSON.parse(localStorage.getItem("pessoas"))
    for(let pessoa of pessoas){
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
    let pessoas = JSON.parse(localStorage.getItem("pessoas"));
    for(let pessoa of pessoas){
      if(pessoa.sexo == 'Feminino'){
        soma += pessoa.idade
        total += 1
      }
    }
    return soma/total
  }

  media_idade_homens(){
    var soma = 0;
    var total = 0;
    let pessoas = JSON.parse(localStorage.getItem("pessoas"))
    for(let pessoa of pessoas){
      if(pessoa.sexo == 'Masculino'){
        soma += pessoa.idade
        total += 1
      }
    }
    return soma/total
  }

  media_idade_por_cidade(cidade){
    var soma = 0;
    var total = 0;
    let pessoas = JSON.parse(localStorage.getItem("pessoas"))
    for(let pessoa of pessoas){
      if(pessoa.cidade == cidade){
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
    let pessoas = JSON.parse(localStorage.getItem("pessoas"))
    for(let pessoa of pessoas){
      if(pessoa.cidade == cidade){
        if(pessoa.sexo == 'F'){
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