import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'] 
})
export class ParentComponent {
  products = [
    {name:'Сок', price: 7, quantity: 0},
    {name:'Чай', price: 8.50, quantity: 0},
    {name:'Кофе', price: 25, quantity: 0},
    {name:'Молоко', price: 3.33, quantity: 0}
  ];
  clicks = this.getQuantity();

  onChanged(change: number, ind: number){
    const product = this.products[ind];
    if (product) {
      product.quantity += change;
      if (product.quantity < 0) {
        product.quantity = 0; 
      }
      this.clicks = this.getQuantity();
    }
  };

  getQuantity(){
    return this.products.reduce((sumQuantity, item) => sumQuantity + item.quantity, 0);
  };

  getTotalPrice(){
    return this.products.reduce((totalPrice, product) => totalPrice + (product.price * product.quantity), 0);
  }
}
