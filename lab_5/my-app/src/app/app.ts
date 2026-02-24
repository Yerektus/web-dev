import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from './models/category.model';
import { Product } from './models/product';
import { ProductService } from './services/product';
import { ProductListComponent } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  title = 'my-app';
  categories: Category[] = [];
  selectedCategory: Category | null = null;
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.categories = this.productService.getCategories();
  }

  selectCategory(category: Category): void {
    this.selectedCategory = category;
    this.products = this.productService.getProductsByCategory(category.id);
  }

  onProductDeleted(productId: number): void {
    this.products = this.products.filter(p => p.id !== productId);
  }
}