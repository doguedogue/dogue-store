import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dogue-store';

  items = ['shirt', 'coat', 'pants', 'shoes'];

  addItem(){
    this.items.push(this.title);
  }

  deleteItem(index: number){
    this.items.splice(index, 1);
  }
}
