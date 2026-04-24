import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServiceProduit } from '../../service-produit';
import { Produit } from '../../interface_produits';
@Component({
  selector: 'app-detail-produit',
  imports: [CommonModule],
  templateUrl: './detail-produit.html',
  styleUrl: './detail-produit.css',
})
export class DetailProduit implements OnInit {produit: Produit | undefined;
  private route = inject(ActivatedRoute);
  private produitService = inject(ServiceProduit);

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.produit = this.produitService.getProducts().find(p => p.id === id);
  }}
