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
  myNotices: any[] = ['hello1'];
  otherNotices: any[] = ['hello2', 'hello3'];
  user: any;

  constructor(public api: ApiService, private token: TokenService) {}

  ngOnInit(){
    this.user = this.token.getUser();
    this.api.getRequest('getallnotices').subscribe((res) => {
      this.notices = JSON.parse(res.data);
      
      this.myNotices = this.notices.filter((n)=> {return n.publisher.username == this.user.username});
      console.log(this.myNotices);

      this.otherNotices = this.notices.filter((n)=> {
        console.log(n.publisher.username);
        return n.publisher.username != this.user.username});
      console.log(this.otherNotices);
    });
  }
}
