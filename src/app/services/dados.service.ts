import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DadosService {
  private dados: any = [];

  constructor() {}

  /**
   * @param index
   * @param dados
   * @returns
   * o metodo para guarda os dados  onde vamos passar o nome (index) e guarda o dado que queremos
   */

  guardarDados(index: string, dados: any): boolean {
    if (index) {
      this.dados[index] = dados;
      return true;
    } else {
      return false;
    }
  }
  /**
   *
   * @param index
   * @returns
   * metodo para pegar Dados, onde vamos passar o do que queremos pegar(chave) e ele vai retornar o dado que solicitamos
   */
  pegarDados(index: string): any {
    if (index) {
      return this.dados[index];
    } else {
      return null;
    }
  }
  /**
   *
   * @param index
   * @returns
   * metodo para deletar os Dados, onde iramos passar uma chave(index) e retornando "delete this.dados[index]"
   */
  deletarDados(index: string): boolean {
    if (index) {
      return delete this.dados[index];
    }
  }
}
