import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ConversorComponent } from "./components";
import { MoedaService } from "./services";
import { ConversorService } from "./services";
@NgModule({
  declarations: [ConversorComponent],
  imports: [CommonModule],
  providers: [MoedaService, ConversorService],
  exports: [ConversorComponent],
})
export class ConversorModule {}
