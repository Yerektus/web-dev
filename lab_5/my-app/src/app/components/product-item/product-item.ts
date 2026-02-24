import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() deleteProduct = new EventEmitter<number>();

  currentImageIndex: number = 0;
  liked: boolean = false;

  getStars(): string[] {
    const rating = this.product.rating;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const stars: string[] = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push('★');
    }
    if (hasHalfStar) {
      stars.push('⯨');
    }
    while (stars.length < 5) {
      stars.push('☆');
    }
    return stars;
  }

  formatPrice(price: number): string {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  likeProduct(): void {
    this.product.likes++;
    this.liked = true;
  }

  onDelete(): void {
    const confirmed = confirm(`Удалить "${this.product.name}"?`);
    if (confirmed) {
      this.deleteProduct.emit(this.product.id);
    }
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.product.images.length;
  }

  previousImage(): void {
    this.currentImageIndex = this.currentImageIndex === 0
      ? this.product.images.length - 1
      : this.currentImageIndex - 1;
  }

  getCurrentImage(): string {
    return this.product.images[this.currentImageIndex];
  }

  shareOnWhatsApp(): void {
    const text = `Check out this product: ${this.product.name} - ${this.product.link}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  }

  shareOnTelegram(): void {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }
}