import { IlistaGenero } from './../../models/IGenero.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GenerosService {
  lingua = 'pt-BR';

  private apiURL = 'https://api.themoviedb.org/3/';
  private key = '?api_key=20ff1559bc12dcf336e671903e7318b9';

  constructor(
    private http: HttpClient,
    public toastController: ToastController
  ) {}

  /**
   *
   * @param busca
   * @returns
   * Este metodo faz uma busca de um fime, vai receber o parametro de busca(string) e vai retorna um Observable
   * que vai ser resposavel para ficar observendo a requisção http e tratando a requisção para que traga somente
   * a resposta quando vier da internt.
   * Observable vai trazer um tipo <IListaFilmes>
   * OBS: é preciso trata o rertorno para caso haja algum erro. E preciso usar os operadores do Observable o (map e catchError)
   * logo devemos importalos (import { map, catchError } from 'rxjs/operators';)
   */
  buscarGeneros(): Observable<IlistaGenero> {
    const url = `${this.apiURL}genre/movie/list${this.key}&language=${this.lingua}`;
    return this.http.get<IlistaGenero>(url).pipe(
      map((retorno) => retorno),
      catchError((erro) => this.exibirErro(erro))
    );
  }
  /**
   *
   * @param erro
   * @returns
   * metodo para alertar o erro ao usuario, é importante retornar um valor null para não dá erro no buscarFilmes
   */
   async exibirErro(erro) {
    const toast = await this.toastController.create({
      message: 'Erro ao consultar a API!',
      duration: 2000,
      color: 'danger',
      position: 'middle',
    });
    toast.present();
    return null;
  }
}
