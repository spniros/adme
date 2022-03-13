import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { SelectItemAction } from 'src/app/store/action/constants';
import { VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  public videoDetail: any;

  constructor(private activatedRoute: ActivatedRoute, public videosService: VideosService, private store: Store<any>) {
  }



  ngOnInit(): void {

    this.activatedRoute.params.subscribe(res => {
      let id = res['id']
      if (id) { this.getSelectedVideo(id) }


    });




  }

  async getSelectedVideo(id: any) {
    debugger;
    const selectedVideo = await this.videosService.getVideoById(id);
    this.videoDetail = { type: 'video/mp4', src: selectedVideo?.sources[0], ...selectedVideo }
    this.store.dispatch(new SelectItemAction(this.videoDetail));


  }

}
