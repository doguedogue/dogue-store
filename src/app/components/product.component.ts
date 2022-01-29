import { Component } from '@angular/core'

import { Product} from '../product.model'

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'

})

export class ProductComponent {

    product: Product = {
        id: '1',
        image: 'assets/images/camiseta.png',
        title: 'Camiseta',
        price: 4000,
        description: 'bla bla bla bla bla' 
    };
}