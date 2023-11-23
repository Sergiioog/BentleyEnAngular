import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { IndexComponent } from './components/body/index/index.component';
import { AboutComponent } from './components/body/about/about.component';
import { ContactComponent } from './components/body/contact/contact.component';
import { FaqComponent } from './components/body/faq/faq.component';
import { CabeceraComponent } from './components/header/cabecera/cabecera.component';
import { BotonComponent } from './components/body/index/boton/boton.component';
import { BloghomeComponent } from './components/body/bloghome/bloghome.component';
import { BlogpostComponent } from './components/body/blogpost/blogpost.component';
import { ImagenComponent } from './components/header/cabecera/imagen/imagen.component';
import { WhyComponent } from './components/body/index/why/why.component';
import { SentenceComponent } from './components/body/index/sentence/sentence.component';
import { CarsComponent } from './components/body/index/cars/cars.component';
import { NewsletterComponent } from './components/body/index/newsletter/newsletter.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    IndexComponent,
    AboutComponent,
    ContactComponent,
    FaqComponent,
    CabeceraComponent,
    BotonComponent,
    BloghomeComponent,
    BlogpostComponent,
    ImagenComponent,
    WhyComponent,
    SentenceComponent,
    CarsComponent,
    NewsletterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
