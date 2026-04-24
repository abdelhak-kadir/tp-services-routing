import { Routes } from '@angular/router';
import { Login } from './login/login';
import { ListeProduit } from './liste-produit/liste-produit';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'produits', component: ListeProduit },
  { path: '**', component: NotFound }
];