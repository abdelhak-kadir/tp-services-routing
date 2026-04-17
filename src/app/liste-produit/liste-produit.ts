import { Component ,Input ,inject, OnInit} from '@angular/core';
import { Produit } from '../interface_produits';
import { CommonModule } from '@angular/common';
import { ServiceProduit } from '../service-produit';
@Component({
  selector: 'app-liste-produit',
  imports: [CommonModule],
  templateUrl: './liste-produit.html',
  styleUrl: './liste-produit.css',
})
export class ListeProduit implements OnInit {
  //@Input() products: Produit[] = [];

  private serviceProduit = inject(ServiceProduit);
  products: Produit[] = [];
  ngOnInit(): void {
    this.products = this.serviceProduit.getProducts();
  }
  supprimer(id: number): void {
    this.serviceProduit.supprimerProduit(id);
    this.products = this.serviceProduit.getProducts();
  }
}

