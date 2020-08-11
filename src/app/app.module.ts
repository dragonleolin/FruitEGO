import { TestService } from './test.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { SiderbarComponent } from './component/siderbar/siderbar.component';
import { HomeComponent } from './page/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { YoutubePageComponent } from './page/youtube-page/youtube-page.component';
import { PlayerWidgetsComponent } from './page/player-widgets/player-widgets.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    SiderbarComponent,
    HomeComponent,
    YoutubePageComponent,
    PlayerWidgetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TestService], // 在providers中加入TestService
  bootstrap: [AppComponent]
})
export class AppModule { }