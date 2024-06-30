import { Routes } from '@angular/router';
import { ProductListComponent } from 'src/app/components/product-list/product-list.component';
import { ProductItemDetailComponent } from 'src/app/components/product-item-detail/product-item-detail.component';
import { CartComponent } from 'src/app/components/cart/cart.component';
import { ConfirmationComponent } from 'src/app/components/confirmation/confirmation.component';

export const routes: Routes = [
    { path: '', component: ProductListComponent },
    { path: 'product/:id', component: ProductItemDetailComponent },
    { path: 'cart', component: CartComponent },
    { path: 'confirmation', component: ConfirmationComponent }
];
