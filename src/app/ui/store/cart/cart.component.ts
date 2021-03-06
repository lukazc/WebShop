import { Component, ViewChild } from '@angular/core';

import { Cart } from '@app-data/cart/cart.service';

@Component({
    templateUrl: 'cart.component.html',
    styleUrls: ['cart.component.scss'],
    selector: 'app-cart'
})
export class CartComponent {
    constructor(public cart: Cart) {}

    orderCompleted = false;

    @ViewChild('stepper') stepper;

    completeOrder() {
        this.orderCompleted = true;
        setTimeout(() => {
            this.stepper.next();
        }, 0);
    }

    increaseQuantity (line) {
        this.cart.updateQuantity(line.product, line.quantity + 1);
    }
    decreaseQuantity (line) {
        this.cart.updateQuantity(line.product, line.quantity - 1);
    }
}
