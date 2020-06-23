import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

import { Moeda, Conversao, ConversaoResponse } from "../models";
import { MoedaService, ConversorService } from "../services";

@Component({
  selector: "app-conversor",
  templateUrl: "./conversor.component.html",
  styleUrls: ["./conversor.component.css"],
})
export class ConversorComponent implements OnInit {
  moedas: Moeda[];
  converao: Conversao[];
  possuiErro: boolean;
  ConversaoResponse: ConversaoResponse;

  @ViewChild("conversaoForm", { static: true })
  conversaoFrom: NgForm;

  constructor(
    private moedaService: MoedaService,
    private conversorService: ConversorService
  ) {}

  ngOnInit() {}
}
