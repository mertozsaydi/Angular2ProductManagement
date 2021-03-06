import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { AppRoutingModule }  from './app-routing.module';
import { ProductModule }  from './products/product.module';
import { UserModule } from './user/user.module';


@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule,
    ProductModule,
    UserModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent,
    WelcomeComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
