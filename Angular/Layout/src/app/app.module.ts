import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponentComponent,
    MainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
