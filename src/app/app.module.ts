import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { RegComponent } from './reg/reg.component';
import { GallaryComponent } from './gallary/gallary.component';
import { JavaComponent } from './java/java.component';
import { AngularComponent } from './angular/angular.component';
import { HtmlComponent } from './html/html.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Reg1Component } from './reg1/reg1.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    ContactComponent,
    RegComponent,
    GallaryComponent,
    JavaComponent,
    AngularComponent,
    HtmlComponent,
    Reg1Component
  ],
  imports: [
    BrowserModule,
    routes,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
