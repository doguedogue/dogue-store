import { Component } from '@angular/core';

import { Product} from './product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dogue-store';
  power:number = 10;

  items = ['shirt', 'coat', 'pants', 'shoes'];

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

  addItem(){
    this.items.push(this.title);
  }

  deleteItem(index: number){
    this.items.splice(index, 1);
  }

  clickProduct(id: number){
    console.log('Product: '+id);
  }
}
