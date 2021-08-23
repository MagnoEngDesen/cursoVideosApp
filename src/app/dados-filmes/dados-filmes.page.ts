import { IFilmeApi } from './../../models/IFilmeAPI.model';
import { DadosService } from './../services/dados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-filmes',
  templateUrl: './dados-filmes.page.html',
  styleUrls: ['./dados-filmes.page.scss'],
})
export class DadosFilmesPage implements OnInit {
  /* O OnInit é implementado por padrão toda vez que é criada uma pagina utilizando o ionic
  toda vez que a pagina for iniciado ele vai chamar o metodo ngOnInit()... por esse motivo vamos utilizar
  para guarna o filme.

  primeiro vamos ter que criar uma variavel para guara o filme, mas não vamos atribuir nenhum valor no mento
  da criação(pelo motivo que a pagina não receba um filme vamos ter a variavel null */
  filme: IFilmeApi;

  generos: string[] =[];

  constructor(public dadosService: DadosService) {}

  ngOnInit() {
    this.filme = this.dadosService.pegarDados('filme');
    this.generos = this.dadosService.pegarDados('generos');
    console.log('Filme Enviado', this.filme);
  }
}
