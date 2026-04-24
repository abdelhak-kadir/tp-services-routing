import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServiceProduitService } from '../service-produit.service';
import { Produit } from '../produit';
@Component({
  selector: 'app-detail-produit',
  imports: [CommonModule],
  templateUrl: './detail-produit.html',
  styleUrl: './detail-produit.css',
})
export class DetailProduit implements OnInit {produit: Produit | undefined;
  private route = inject(ActivatedRoute);
  private produitService = inject(ServiceProduitService);

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.produit = this.produitService.getProduits().find(p => p.id === id);
  }}
