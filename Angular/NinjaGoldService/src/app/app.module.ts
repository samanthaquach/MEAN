import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FarmComponent } from './farm/farm.component';
import { CaveComponent } from './cave/cave.component';
import { CasinoComponent } from './casino/casino.component';
import { HouseComponent } from './house/house.component';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    FarmComponent,
    CaveComponent,
    CasinoComponent,
    HouseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
