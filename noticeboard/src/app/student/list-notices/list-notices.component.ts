import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-list-notices',
  templateUrl: './list-notices.component.html',
  styleUrls: ['./list-notices.component.css']
})
export class ListNoticesComponent implements OnInit {
  notices:any[] = [];

  constructor(public api: ApiService){ }

  ngOnInit(){
    this.api.getRequest('getallnotices').subscribe((res)=> {
      
      this.notices = JSON.parse(res.data);
    });
  }
}
