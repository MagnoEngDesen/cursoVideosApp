import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IListaFilmes } from 'src/models/IFilmeAPI.model';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FilmeService {
  /* IMPORTANTE! */
  /* é preciso criar sempre um novo serviso para cada tipo de dados que for trabalhar
  nesse caso estamos usando um API para buscar os dados do filmes */

  /*  é preciso olhar na documentação qual tipo de função vc irar realizar neste caso está função
  e busar filmes, na documentação em search movies existe as variavel que precisa ser criadas, devemos colocar
  ela antes das variaves privadas */

  lingua = 'pt-BR';
  regiao = 'BR';

  //é preciso cricar uma variavel para guardar o url
  //é preciso criar uma chave
  private apiURL = 'https://api.themoviedb.org/3/';
  private key = '?api_key=20ff1559bc12dcf336e671903e7318b9';

  //apos a criação das variaveis é preciso importar o HttpClientModule em tbs/app.module.ts
  // e em NgModule importes adicionalo em imports, em seguida adiciar no construtor

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
  buscarFilmes(busca: string): Observable<IListaFilmes> {
    const url = `${this.apiURL}search/movie${this.key}&language=${this.lingua}&region=${this.regiao}&query=${busca}`;
    return this.http.get<IListaFilmes>(url).pipe(
      catchError(erro => this.exibirErro(erro))
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
