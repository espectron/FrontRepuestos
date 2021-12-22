import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  myAppUrl = "https://localhost:44369/";
  myApiUrl = "api/Producto";

  constructor(private http: HttpClient) { }

  getListProductos(): Observable<any> {
  return this.http.get(this.myAppUrl + this.myApiUrl);
  }
}
