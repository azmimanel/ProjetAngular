import { Component, OnInit } from '@angular/core';
import { Session } from '../session';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FakeSessionItemService } from '../fake-sessionitem-service.service';
@Component({
  selector: 'app-session-edit-form',
  templateUrl: './session-edit-form.component.html',
  styleUrls: ['./session-edit-form.component.css']
})
export class SessionEditFormComponent implements OnInit {
  id: number = 0;
  private sub: any;
  session:any;
  tracks = ['MEAN', 'Angular', 'NodeJS', 'Android', 'Swift', 'Xamarin'];
  constructor(private route: ActivatedRoute,private sessionItemService: FakeSessionItemService) { }

  ngOnInit(): void { 
    this.session = this.sessionItemService.getSession(1);
  }
  editSession(sessionItem: Session): void{
    console.log(sessionItem);
}
}