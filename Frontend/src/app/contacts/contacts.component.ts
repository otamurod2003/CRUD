import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
 
})
export class ContactsComponent {
  contacts: any;
  constructor (private ApiSvc: ApiService){}
  ngOnInit(){
    this.ApiSvc.getContact().subscribe(response =>{
      this.contacts = response;
    })
  }
}
