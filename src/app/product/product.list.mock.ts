// product classımızı import edelim ki properylerine deger atayabilelim. Bunu kullanmazsan sınıfın elemanlarına 
// erişemezsin. (Namespace eklemesi gibi c#’da)
import {Product} from './product'
// const tipinde Product sınıfnı kullanan bir object array tanimladik ve icine deger atadik.
// Mümkün oldugunca api'den donen ornek degerlere göre atama yaptik, ama liste sahte olacagi icin cok da dert degil.
// deger atanirken object array'de = kullanilmaz onun yerine : kullanilir.
export const ProductList:Product[] =[
    {productId:1,productName:"chai 1", categoryId:2, quantityPerUnit:"10 boxes x20 bags",unitPrice:20,unitsInstock:10},
    {productId:2,productName:"chai 2", categoryId:2, quantityPerUnit:"10 boxes x20 bags",unitPrice:20,unitsInstock:10},
    {productId:3,productName:"chai 3", categoryId:2, quantityPerUnit:"10 boxes x20 bags",unitPrice:20,unitsInstock:10},
    {productId:4,productName:"chai 4", categoryId:2, quantityPerUnit:"10 boxes x20 bags",unitPrice:20,unitsInstock:10},
    {productId:5,productName:"chai 5", categoryId:2, quantityPerUnit:"10 boxes x20 bags",unitPrice:20,unitsInstock:10},
]
