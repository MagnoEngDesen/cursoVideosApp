import { IGenero } from './../../models/IGenero.model';
import { GenerosService } from './../services/generos.service';
import { IListaFilmes, IFilmeApi } from './../../models/IFilmeAPI.model';
import { FilmeService } from './../services/filme.service';
import { IVideo } from 'src/models/IVideo.model';
import { DadosService } from './../services/dados.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  titulo = 'FilmesFlix';
  listaVideos: IVideo[] = [
    {
      nome: 'Luca (2021)',
      lancamento: '17/06/2021',
      duracao: '1h 41m',
      classificacao: 76,
      cartaz:
        'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/9jPa6SlUYxPFMVZlEuceiPPAA15.jpg',
      generos: ['Animação', 'Comédia', 'Família', 'Fantasia'],
      pagina: '/luca',
    },
  ];
  listaFilmes: IListaFilmes;

  generos: string[] = [];

  /**
   *
   * @param alertController
   * @param toastController
   * @param dadosService
   * @param route
   * os paramentro usado são para criação de um alert, um para fazer toast e um para exibir a pagina que filmes
   * que foi criada, é precisao criar um metodo para cadas imports
   */
  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router,
    public filmeService: FilmeService,
    public generosService: GenerosService
  ) {}

  buscarFilmes(evento: any) {
    console.log(evento.target.value);
    const busca = evento.target.value;
    if (busca && busca.trim() !== '') {
      this.filmeService.buscarFilmes(busca).subscribe((dados) => {
        console.log(dados);
        this.listaFilmes = dados;
      });
    }
  }
  /**
   *
   * @param filme
   * Metodo para exibix a pagina de filme, neste metodo iremos guarda os dados do filme, utilizando
   * o metodo guardaDados(index: string, dados: any):boolean e em seguida chamar um metodo para poder pegar
   * ate a pagina dados filmes
   */
  exibirFilme(filme: IFilmeApi) {
    this.dadosService.guardarDados('filme', filme);
    this.route.navigateByUrl('/dados-filmes');
  }

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'SIM, favoritar!',
          handler: () => {
            this.apresentarToast();
            console.log('Confirm Okay');
          },
        },
      ],
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado ao favorito.',
      duration: 2000,
      color: 'success',
    });
    toast.present();
  }
  ngOnInit() {
    this.generosService.buscarGeneros().subscribe((dados) => {
      console.log('Genheros', dados.genres);
      dados.genres.forEach((genero) => {
        this.generos[genero.id] = genero.name;
      });

      this.dadosService.guardarDados('generos', this.generos);
    });
  }
}
