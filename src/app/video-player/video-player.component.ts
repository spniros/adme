import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import videojs from 'video.js';

export interface VideoSrc {
  src: string;
  type: string;
}


@Component({

  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  @ViewChild('videoPlayer', {static: true}) videoPlayerElement!: ElementRef;

  @Input() set videoSource(videoSrc: VideoSrc) {
    this.videoSrc = videoSrc;
    this._initPlayer();
  }
  player!: videojs.Player;
  videoSrc!: VideoSrc;

  private _isPlayerInited = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  /**
   * Initialize the player
   * @private
   */
  private _initPlayer() {
    if (this.videoSrc) {
      if (!this._isPlayerInited) {
        this.player = videojs(this.videoPlayerElement.nativeElement, {
          preload: 'auto',
          controls: true
        });
        this._isPlayerInited = true;
        this.player.ready(() => {
          this._updateVideoUrl(this.videoSrc);

        });
      } else {
        this._updateVideoUrl(this.videoSrc);
      }

    }
  }

  /**
   * update video url when updating the source
   * @param videoSrc
   * @private
   */
  private _updateVideoUrl(videoSrc: VideoSrc) {
    if (this.player) {
      this.player.src({
        type: videoSrc.type,
        src: videoSrc.src
      });
    }
  }

  ngOnDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }



}
