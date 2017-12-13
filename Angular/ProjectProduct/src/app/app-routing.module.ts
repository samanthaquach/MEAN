import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    children: [],

  },
  {
    path: 'productlist',
    pathMatch: 'full',
    component: ProductListComponent,
    children: [],
  },
  {
    path: 'productlist/edit/:title',
    component: EditComponent,
    children: [],
  },
  {
    path: 'create',
    // redirectTo: 'productlist',
    pathMatch: 'full',
    component: CreateComponent,
    children: [],
  },
  {
    path: '**',
    component: PagenotfoundComponent,
    children: [],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
