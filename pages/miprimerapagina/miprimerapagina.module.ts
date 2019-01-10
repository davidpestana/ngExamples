import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiprimerapaginaComponent } from './miprimerapagina.component';
import { MiSubcomponenteDePrimeraPaginaComponent } from './mi-subcomponente-de-primera-pagina/mi-subcomponente-de-primera-pagina.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MiprimerapaginaComponent, MiSubcomponenteDePrimeraPaginaComponent]
})
export class MiprimerapaginaModule { }
