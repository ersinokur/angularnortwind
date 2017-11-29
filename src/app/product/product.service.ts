import { Injectable , Inject} from '@angular/core';
import { Product } from './product';
// api'den gelecegi icin artik gerek yok mock liste
//import { ProductList } from './product.list.mock';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'

@Injectable()
export class ProductService {

  constructor(private http:Http, @Inject('apiUrl') private apiUrl  ) { }

  getProducts() :Observable<Product[]>{
    return this.http.get(this.apiUrl+"/products")
    .map(response=>response.json());
    // donen json datasini product array'e map ediyor.
  }
}
