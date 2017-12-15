import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { FormComponent } from './form/form.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FormComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    component: PagenotfoundComponent,
    children: [],
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
