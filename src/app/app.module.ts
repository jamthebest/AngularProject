import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MaterialModule } from './material/material.module';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { HomeComponent } from './pages/home/home.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    CardItemComponent,
    HomeComponent,
    CustomButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
