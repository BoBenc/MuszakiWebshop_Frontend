import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StockpileComponent } from './components/stockpile/stockpile.component';

const routes: Routes = [
  {path: "home", component:HomeComponent},
  {path: "stockpile", component:StockpileComponent},
  {path: "", redirectTo:"home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
