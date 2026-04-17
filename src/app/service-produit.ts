import { Injectable } from '@angular/core';
import { Produit } from './interface_produits';

@Injectable({
  providedIn: 'root',
})
export class ServiceProduit {
  private products: Produit[] = [
    { id: 1, nom: 'Ordinateur portable', description: 'hp 15 i5 9000', prix: 3000, quantite: 10 },
    { id: 2, nom: 'Souris sans fil', description: 'logitech master 2', prix: 100, quantite: 50 },
    { id: 3, nom: 'Clavier mécanique', description: 'logitech G clavier gaming, led', prix: 200, quantite: 20 },
    { id: 4, nom: 'Écran 4K', description: 'Samsung 21, haut parleur intégré', prix: 4000, quantite: 10 }
  ];

  getProducts(): Produit[] {
    return this.products;
  }
  ajouterProduit(produit: Produit): void {
    this.products.push(produit);
  }

  supprimerProduit(id: number): void {
    this.products = this.products.filter(p => p.id !== id);
  }
}
