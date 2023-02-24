import { Component } from "@angular/core";
import { ApiService } from "../api.service";
import { Contact } from "../contact";

@Component({
    selector: 'contacts',
    templateUrl: './contacts.component.html'
})
export class ContactsComponent {
    contacts:any;
    constructor(public ApiSvc: ApiService) { }
    ngOnInit() {
        this.ApiSvc.getContact().subscribe(response => {
            this.contacts = response;
            })

        this.ApiSvc.deleteContact(this.contacts).subscribe(del=>{
            this.contacts = del;
        })
    }
}