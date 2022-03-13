import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Video } from 'src/app/entity/videos';
import { VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public videoList: Video[] | undefined;
  public selectedVideo: any | undefined;

  
  constructor(public videosService: VideosService, public store: Store) { 
   
  }

  ngOnInit(): void {
    this.getVideoList();

  
    this.selectedVideo = this.store.select((store) => store).subscribe(
      (res:any)=>{
        this.selectedVideo=res.selectedVideos
      }
    );
   



  }



  getVideoList(): void {
    this.videoList = this.videosService.getVideoList();
  }
}
