import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EqualValidator } from './equal-validator.directive';  // import validator
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule


@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    UserComponent,
    EqualValidator, // import to app module
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- Include module in our AppModules
    HttpModule, // <-- Include module in our AppModules
    // angular.module('yourmodulename', ['ngPassword'])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
