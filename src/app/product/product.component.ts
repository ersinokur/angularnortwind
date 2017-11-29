import { Component, OnInit } from '@angular/core';
//ihtiyacimiz olan siniflari dahil ediyik. case sensetive gibi alingan bir yapisi var
// ona gore importtan sonra {} icinde yazdigin nesnelerin adi dogru olmali yoksa kirmizi diyor.
import { Product } from './product';
//---> prodcut serviceden alacagimiz icin gerek kalmadi --
// --import { ProductList } from './product.list.mock';
//product service import edilir.
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  // service her seferinde new olarak yeni bir instance olusmasi icin
  // bir defa olusup tum componentlerde tek bir instace olarak calismasi
  // icin app.module providers kismina ekleniyor. 
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  addedProduct: string;
  // products adında bir değişken tanımladık, tipi product array olan
  products: Product[]
  // yapici metoda  hangi service'in kullanilcagini belirtiyoruz.
  constructor(private productService: ProductService) {

    // ** bu ifadeye gerek yok, servis vasitasiyle listeyi cekecegiz.
    // productCompnents load oldugunda (OnInit) bu nesneyi new ile olusturur gibi dusun.           
    // this.products = ProductList;
  }

  ngOnInit() {

    this.getProducts();
  }

  getProducts() {
    // donen observable degeri products dizisine atamak icin
    this.productService.getProducts().subscribe(p => {
      this.products = p
    }
    );
  }
  //product sayfasindaki add to cart butonuna tiklayinca calisacak metodumuz
  addToCart(product: Product) {

    this.addedProduct = product.productName;

    //ekleme islemi daha sonra bir cart service ile yapacagiz.
    // simdilik butona basildigini anlayalim.
    // alert(prodcut.productName+" sepete eklendi.");
  }
}
