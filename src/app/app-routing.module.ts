import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WinebottlesListComponent } from './winebottles-list/winebottles-list.component';

const routes: Routes = [
  {
    path: '' ,
    redirectTo:'/collection',
    pathMatch:'full'
  },
  {
    path: 'collection',
    component: WinebottlesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
