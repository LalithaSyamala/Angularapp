import { Component, Input} from '@angular/core';
import { product } from '../models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent{
@Input() productobj:product;
  
}
