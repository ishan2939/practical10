import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-view-notices',
  templateUrl: './view-notices.component.html',
  styleUrls: ['./view-notices.component.css']
})
export class ViewNoticesComponent implements OnInit {

  notices:any[] = ['hello1', 'hello2', 'hello3'];
  myNotices: any[];
  otherNotices: any[];
  user: any;

  constructor(public api: ApiService, private token: TokenService) {}

  ngOnInit(){
    this.getUser();
    this.getNotices();
  }
  
  getUser() {
    this.user = this.token.getUser();
  }

  getNotices() {
    this.api.getRequest('getallnotices').subscribe((res) => {
      this.notices = JSON.parse(res.data)
      this.getMyNotices();
      this.getOtherNotices();
    })
  }

  getMyNotices() {
    this.myNotices = this.notices.filter((n)=> {
      return n.publisher.username == this.user.username;
    }); 
  }

  getOtherNotices() {
    this.otherNotices = this.notices.filter((n)=> {
      return n.publisher.username != this.user.username
    }); 
  }
}
