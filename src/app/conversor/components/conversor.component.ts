import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

import { Moeda, Conversao, ConversaoResponse } from "../models";
import { MoedaService, ConversorService } from "../services";
import { JsonPipe } from "@angular/common";

@Component({
  selector: "app-conversor",
  templateUrl: "./conversor.component.html",
  styleUrls: ["./conversor.component.css"],
})
export class ConversorComponent implements OnInit {
  moedas: Moeda[];
  conversao: Conversao;
  possuiErro: boolean;
  ConversaoResponse: ConversaoResponse;

  @ViewChild("conversaoForm", { static: true })
  conversaoForm: NgForm;

  constructor(
    private moedaService: MoedaService,
    private conversorService: ConversorService
  ) {}

  ngOnInit() {
    this.moedas = this.moedaService.listarTodas();
    this.init();
  }

  init(): void {
    this.conversao = new Conversao("USD", "BRL", null);
    this.possuiErro = false;
  }

  converter(): void {
    if (this.conversaoForm.form.valid) {
      this.conversorService.converter(this.conversao).subscribe(
        (response) => (this.ConversaoResponse = response),
        (error) => (this.possuiErro = true)
      );
      alert("Convertendo: " + JSON.stringify(this.conversao));
    }
  }
}
