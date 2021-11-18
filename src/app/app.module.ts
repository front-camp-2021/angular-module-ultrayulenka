import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';;

import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavigationComponent } from './components/navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    NavigationComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
