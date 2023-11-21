import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/body/about/about.component';
import { IndexComponent } from './components/body/index/index.component';
import { ContactComponent } from './components/body/contact/contact.component';
import { FaqComponent } from './components/body/faq/faq.component';

const routes: Routes = [
  { path: '', component: IndexComponent }, //Cargamos ruta por defecto para que se vea el componente index
  {path:'index', component:IndexComponent}, //Añadimos rutas dinamicas a los componentes
  {path:'about', component: AboutComponent},
  {path:'contact', component: ContactComponent},
  {path:'faq', component: FaqComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
