import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Produit } from './interface_produits';
import { ServiceProduit } from './service-produit';
import { ListeProduit } from './liste-produit/liste-produit';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tp-services-routing');
  //private products: Produit[] = [
  //{ id: 1, nom: 'Ordinateur portable', description: 'hp 15 i5 9000', prix: 3000, quantite: 10 },
  //{ id: 2, nom: 'Souris sans fil', description: 'logitech master 2', prix: 100, quantite: 50 },
  //{ id: 3, nom: 'Clavier mécanique', description: 'logitech G clavier gaming, led', prix: 200, quantite: 20 },
  //{ id: 4, nom: 'Écran 4K', description: 'Samsung 21, haut parleur intégré', prix: 4000, quantite: 10 }
  //];
}
