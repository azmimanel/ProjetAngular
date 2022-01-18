import { Component, OnInit } from '@angular/core';
import { FakeSessionItemService } from '../fake-sessionitem-service.service';
@Component({
  selector: 'app-session-item-list',
  templateUrl: './session-item-list.component.html',
  styleUrls: ['./session-item-list.component.css']
})
export class SessionItemListComponent implements OnInit {
  sessionsItems: any;

  constructor(private sessionItemService: FakeSessionItemService) { }

  ngOnInit(): void {
    this.sessionsItems= this.sessionItemService.get();
  }

}
