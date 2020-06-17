import { Injectable } from "@angular/core";

import { Moeda } from "../models";

@Injectable({
  providedIn: "root",
})
export class MoedaService {
  moedas: Moeda[];
  moedasOBJ: Moeda[];
  constructor() {}

  listarTodas(): Moeda[] {
    if (this.moedas) {
      return this.moedas;
    }

    this.moedas = [];

    for (let moedaObj of this.moedasOBJ) {
      let moeda: Moeda = new Moeda();
      //the i'll use a Object.assign
      Object.assign(moeda, moedaObj);
      this.moedas.push(moeda);
    }

    return this.moedas;
  }
}
