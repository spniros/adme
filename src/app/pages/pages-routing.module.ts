import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  {
    path:'/',
    component:VideoComponent,
    data:{title:'video'},
  },
  {
    path:':id',
    component:VideoComponent,
    data:{title:'video'},


  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
