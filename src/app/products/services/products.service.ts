import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/Models/Category';
import { Product } from 'src/app/Models/Product';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpService: HttpClient) {}
  getProducts(): Observable<Product[]> {
    return this.httpService.get<Product[]>(`${environment.api}` + 'products');
  }
}
