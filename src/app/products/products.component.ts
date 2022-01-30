import { Component, OnInit } from '@angular/core';

import { Product} from '../product.model'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 4000,
      description: 'bla bla bla bla bla' 
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 4500,
      description: 'bla bla bla bla bla' 
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 3700,
      description: 'bla bla bla bla bla' 
    },
    {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'Pin',
      price: 100,
      description: 'bla bla bla bla bla' 
    },
    {
      id: '5',
      image: 'assets/images/stickers1.png',
      title: 'Stickers',
      price: 250,
      description: 'bla bla bla bla bla' 
    },
    {
      id: '6',
      image: 'assets/images/stickers2.png',
      title: 'Stickers',
      price: 250,
      description: 'bla bla bla bla bla' 
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }
  
  clickProduct(id: number){
    console.log('Product: '+id);
  }

}
