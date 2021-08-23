import { DadosService } from './../services/dados.service';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { IVideo } from 'src/models/IVideo.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  titulo = 'SériesFlix';
  listaVideos: IVideo[] = [
    {
      nome: 'What If...? (2021)',
      lancamento: '11 de ago de 2021',
      duracao: '34m',
      classificacao: 76,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/e7n55C4027aRPHNmjE8XIk8nKvZ.jpg',
      generos: ['Animação', 'Action', 'Adventure', 'Sci-Fi', 'Fantasy'],
      pagina: '/what-if',
    },
  ];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router
  ) {}

  exibirSeries(series: IVideo) {
    this.dadosService.guardarDados('Séries', series);
    this.route.navigateByUrl('/dados-series');
  }

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja realmente favoritar a Série? ',
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
      message: 'Série fio adicionada ao favorito.',
      duration: 2000,
      color: 'success',
    });
    toast.present();
  }
}
