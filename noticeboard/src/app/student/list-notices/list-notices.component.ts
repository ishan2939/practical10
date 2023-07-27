import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { map } from 'rxjs';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-list-notices',
  templateUrl: './list-notices.component.html',
  styleUrls: ['./list-notices.component.css'],
})
export class ListNoticesComponent implements OnInit {
  notices: any[] = [];
  filteredNotices: any[] = [];
  user: any = {};

  constructor(public api: ApiService, private token: TokenService) {}

  ngOnInit() {
    this.user = this.token.getUser();
    this.api.getRequest('getallnotices').subscribe((res) => {
      this.notices = JSON.parse(res.data);
      this.filteredNotices = JSON.parse(res.data);
    });
  }

  postLike(event: any, noticeId: string) {
    event.stopPropagation();
    if (!event.target.classList.contains('like')) return;

    const svgElement = event.target.querySelector('.likeIcon svg')!;

    if (!event.target.classList.contains('active')) {
      this.api
        .postRequest(`addlike/${noticeId}`, {
          userId: this.token.getUser()._id,
        })
        .subscribe((res) => {
          event.target.classList.add('active');
          svgElement.setAttribute('fill', 'red');
          this.api.getRequest('getallnotices').subscribe((res) => {
            this.notices = JSON.parse(res.data);
            this.filteredNotices = this.notices;
          });
        });
    } else {
      this.api
        .postRequest(`removelike/${noticeId}`, {
          userId: this.token.getUser()._id,
        })
        .subscribe((res) => {
          event.target.classList.remove('active');
          svgElement.setAttribute('fill', 'currentColor');
          this.api.getRequest('getallnotices').subscribe((res) => {
            this.notices = JSON.parse(res.data);
            this.filteredNotices = JSON.parse(res.data);
          });
        });
    }
  }

  filterNotices(event: any) {
    this.filteredNotices = this.notices.filter((n) => {
      return n.title.toLowerCase().includes(event.target.value.toLowerCase());
    });
  }

  compareDates(a: Date, b: Date): number {
    return a.getTime() - b.getTime();
  }

  sort(event:any){
    
    if (!event.target.classList.contains('sort')) {
      console.log("sort");
      
      this.filteredNotices = this.filteredNotices.sort((n1, n2)=> this.compareDates(new Date(n2.createdAt), new Date(n1.createdAt)));
      event.target.classList.add('sort');
      
    }
    else{
      console.log("unsort")
      this.filteredNotices = JSON.parse(JSON.stringify(this.notices));
      event.target.classList.remove('sort');
    }

  }
}
