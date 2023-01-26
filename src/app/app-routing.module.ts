import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelaProdutosComponent } from './tela-produtos/tela-produtos.component';

const routes: Routes = [
  { path:'cadastro', component: TelaCadastroComponent },
  { path:'login', component: TelaLoginComponent },
  { path:'produtos', component: TelaProdutosComponent }
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
