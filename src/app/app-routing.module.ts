import { LayoutmainComponent } from './layout/layoutmain/layoutmain.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoComponent } from './pages/video/video.component';

const routes: Routes = [
  
    {path:'video', redirectTo:'test', pathMatch:'full'},

    { path:'',component:LayoutmainComponent, data:{title:'Home'},
    children:[
      {path:'video', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)}


      
    ]
  
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
