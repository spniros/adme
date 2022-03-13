import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { VideoComponent } from './video/video.component';
import { VideoPlayerModule } from '../video-player/video-player.module';






@NgModule({
  declarations: [
    VideoComponent
    
 
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
     VideoPlayerModule,

  ],
 
})
export class PagesModule { }
