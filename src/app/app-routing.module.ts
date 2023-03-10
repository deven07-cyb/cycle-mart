import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path:"front",
    loadChildren:() => import('./front/front.module').then((m) => m.FrontModule)
  },
  {
    path:"core",
    loadChildren:() => import('./core/core.module').then((m) => m.CoreModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
