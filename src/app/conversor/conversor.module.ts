import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ConversorComponent } from "./components";
import { MoedaService } from "./services";
import { ConversorService } from "./services";
import { NumeroDirective } from "./directives";
@NgModule({
  declarations: [ConversorComponent, NumeroDirective],
  imports: [CommonModule, HttpClientModule, FormsModule],
  providers: [MoedaService, ConversorService],
  exports: [ConversorComponent],
})
export class ConversorModule {}
