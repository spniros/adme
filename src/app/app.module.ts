import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutmainComponent } from './layout/layoutmain/layoutmain.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { StoreModule } from '@ngrx/store';
import { videoReducer } from './store/reducers/videoReducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { RouterModule } from '@angular/router';
// import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
@NgModule({
  declarations: [
    AppComponent,
    LayoutmainComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      selectedVideos: videoReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      // logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
   

  
  ],
  providers: [],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA],

  bootstrap: [AppComponent]
})
export class AppModule { }
