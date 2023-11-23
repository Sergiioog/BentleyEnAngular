import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/body/about/about.component';
import { IndexComponent } from './components/body/index/index.component';
import { ContactComponent } from './components/body/contact/contact.component';
import { FaqComponent } from './components/body/faq/faq.component';
import { BloghomeComponent } from './components/body/bloghome/bloghome.component';
import { BlogpostComponent } from './components/body/blogpost/blogpost.component';
import { PortfoliooverviewComponent } from './components/body/portfoliooverview/portfoliooverview.component';
import { PortfolioitemComponent } from './components/body/portfolioitem/portfolioitem.component';

const routes: Routes = [
  { path: '', component: IndexComponent }, //Cargamos ruta por defecto para que se vea el componente index
  {path:'index', component:IndexComponent}, //Añadimos rutas dinamicas a los componentes
  {path:'about', component: AboutComponent},
  {path:'contact', component: ContactComponent},
  {path:'faq', component: FaqComponent},
  {path:'blog-home', component: BloghomeComponent },
  {path:'blog-post', component: BlogpostComponent},
  {path:'portfolio-item', component: PortfolioitemComponent},
  {path:'portfolio-overview', component: PortfoliooverviewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
