import { Component, OnInit, Input } from '@angular/core';
import { TestService } from './../../test.service';
import { HttpClient } from '@angular/common/http';
import { RouterLinkActive, Router, ActivatedRoute } from '@angular/router';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-page',
  templateUrl: './youtube-page.component.html',
  styleUrls: ['./youtube-page.component.scss'],
})
export class YoutubePageComponent implements OnInit {
  token = this.testService.token;
  datas: any;
  YTId: any;
  youtubeUrl: string = "https://www.youtube.com/embed/Fllk9zr9iM8";
  getId;
  getTitle;
  urlSafe: SafeResourceUrl;


  constructor(
    private testService: TestService,
    private http: HttpClient,
    private route:ActivatedRoute,
    public sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.testService.albumId$.subscribe(res=>{
      this.getId = res.id;
      this.getTitle = res.title;
    });
    this.getInitData();
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeUrl);


  }

  getHomeData(){

  }

  getInitData = () => {
    console.log('getInitData', this.getId);
    this.http
      .get(
        `https://api.kkbox.com/v1.1/charts/${this.getId}/tracks?territory=TW&offset=0&limit=50`,
        {
          headers: {
            Authorization: `Bearer ` + this.token,
          },
        }
      )
      .subscribe((res) => {
        this.datas = [res];
        this.datas = this.datas[0].data;
        // this.getYTData();
        console.log('getInitData', this.datas);
      });
  };

  getYTData(name:string){
    name = 'DJ Khaled (DJ卡利)';
    // youtubeKeyMain: AIzaSyCqiOvXgeO9u7AbLly294jjoZwZ3PFVKDs
    // youtubeKey: AIzaSyDqvzY_cP4_ZI5lKpnWrDWZZu6Gm2PzK74
    this.http
      .get(
        `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDqvzY_cP4_ZI5lKpnWrDWZZu6Gm2PzK74&part=snippet&type=video&q=${name}`
      )
      .subscribe((res) => {
        this.YTId = [res];
        console.log('YTData:', this.YTId);
      });
  };
}
