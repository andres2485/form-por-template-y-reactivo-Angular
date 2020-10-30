import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactivesComponent } from './pages/reactives/reactives.component';
import { TemplatesComponent } from './pages/templates/templates.component';

const routes: Routes = [

{path:'template', component:TemplatesComponent},
{path:'reactivo', component:ReactivesComponent},
{path:'**' , pathMatch:'full' , redirectTo:'reactivo'}   // para trabajar con el template o reactivo cambiar aca

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
