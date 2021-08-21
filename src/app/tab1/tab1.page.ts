import { IVideo } from '../../models/IVideo.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {

  titulo = 'VideosFlix';
  listaVideos: IVideo[] = [
    {
      nome: 'Luca (2021)',
      lancamento: '17/06/2021',
      duracao:'1h 41m',
      classificacao: 76,
      cartaz:'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/9jPa6SlUYxPFMVZlEuceiPPAA15.jpg',
      generos: ['Animação', 'Comédia', 'Família', 'Fantasia']
    }
  ];


  constructor(
    public alertController: AlertController,
    public toastController: ToastController
  ) {}


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
      color: 'success'
    });
    toast.present();
  }
}
