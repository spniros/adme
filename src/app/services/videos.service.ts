import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import videoJson from '../data/videos.json';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor() { }

 

getVideoList() {
  return videoJson.categories[0].videos;

}

getVideoById(id:string){
 const selectedVideo= videoJson.categories[0].videos.find(x=>x.id==id);
 return selectedVideo;

}
}
