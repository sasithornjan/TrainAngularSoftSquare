import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CchildComponent } from './cchild/cchild.component';
import { PparentComponent } from './pparent/pparent.component';


const routes: Routes = [
  {
    path: 'child',
    component: CchildComponent,
  },
  {
    path: 'parent',
    component: PparentComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
