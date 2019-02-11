import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WinebottlesListComponent } from './winebottles-list/winebottles-list.component';
import { MaterialmoduleTestComponent } from './materialmodule-test/materialmodule-test.component';
import { AddNewComponent } from './add-new/add-new.component';

const routes: Routes = [
  {
    path: '' ,
    redirectTo:'/collection',
    pathMatch:'full'
  },
  {
    path: 'collection',
    component: WinebottlesListComponent
  },
  {
    path: 'material-test',
    component: MaterialmoduleTestComponent
  },
  {
    path: 'add-new',
    component: AddNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
