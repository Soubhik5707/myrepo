//import { ModuleWithProviders } from '@angular/core';
//import {RouterModule} from ‘@angular/core’;
import { Routes, RouterModule } from '@angular/router'; 
//module for implementing routing

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { RegComponent } from './reg/reg.component';
import { GallaryComponent } from './gallary/gallary.component';
import { JavaComponent } from './java/java.component';
import { HtmlComponent } from './html/html.component';
import { AngularComponent } from './angular/angular.component';
import { Reg1Component } from './reg1/reg1.component';

//Create and export a variable called Router in the app.routing.ts, which would be a collection of all routes inside the Angular application.
// pathMatch is specifying a strict matching of path to reach the destination page.
// In the routes array, the path object is '' which means the path http://localhost:4200/ , we have not provided any destination 
    // to this object, but we are redirecting this path to items path using redirectTo key.
export const router: Routes = [
    { path: '', redirectTo: 'about', pathMatch: 'full' }, //default page
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'footer', component: FooterComponent},
    { path: 'nav', component: NavComponent },
    { path: 'reg', component: RegComponent },
    { path: 'reg1', component: Reg1Component },
    { path: 'gallary', component: GallaryComponent },
    { path: 'java', component: JavaComponent },
    { path: 'html', component:HtmlComponent },
    { path: 'angular', component: AngularComponent }
];
//RouterModule.forRoot is for creating routes for the entire application
//  pass the routes array in the RouterModule using RouterModule.forRoot(router)
export const routes = RouterModule.forRoot(router);
//CREATE THE app.router.ts inside the App folder

//export const routes: ModuleWithProviders = RouterModule.forRoot(router);