import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';


import { VideoComponent } from './video.component';

describe('VideoComponent', () => {
  let component: VideoComponent;
  let fixture: ComponentFixture<VideoComponent>;
  const initialState = {};
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoComponent ],
      // providers: [DashboardService, DadosService, HubWrapperComponent],
    // imports: [RouterModule]
    imports: [ RouterTestingModule ],
    // providers:[Store]
    providers: [
      provideMockStore({ initialState }),
    ],

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 

  it("should have a tittle for video ", () => {
 
    fixture.detectChanges();
    const tittle = fixture.debugElement.query(By.css("h6"));
    expect(tittle).toBeTruthy()
  });
});
