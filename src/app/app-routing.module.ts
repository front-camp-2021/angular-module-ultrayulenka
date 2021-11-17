import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { WishlistPageComponent } from './components/wishlist-page/wishlist-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'electronics', component: ProductsPageComponent},
  {path: 'wishlist', component: WishlistPageComponent},
  {path: 'cart', component: CartPageComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
