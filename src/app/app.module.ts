import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';

// Main Components
import { HomeComponent } from './Component/home/home.component';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import { SingleProductComponent } from './Component/single-product/single-product.component';

//Service
import { ProductService } from './Service/product.service';
import { LocalStorageHandlerService } from './Service/local-storage-handler.service';
import { CartComponent } from './Component/cart/cart.component';
import { LoginComponent } from './Component/login/login.component';
import { RegistrationComponent } from './Component/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NotfoundComponent } from './Component/notfound/notfound.component';

//Shared Components


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SingleProductComponent,
    CartComponent,
    LoginComponent,
    RegistrationComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ ProductService , LocalStorageHandlerService ],
  bootstrap: [AppComponent]
})

export class AppModule { }
