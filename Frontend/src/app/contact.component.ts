import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { ApiService } from "./api.service";
import { Contact } from "./contact";

@Component({
    selector: 'contact',
    templateUrl: './contact.component.html'
})
export class ContactComponent
{
    contacts:any;
    subscription!: Subscription;
    constructor(public ApiSvc : ApiService){}
    
     contact= new Contact;
     
    post(){
        this.ApiSvc.postContact(this.contact);
    }

    ngOnInit(){
 this.subscription = this.ApiSvc.getSelectedContact().subscribe(q=>{
    this.contact = q;
 })
    }
   ngOnDesrroy(){
        this.subscription.unsubscribe();
   }
   resetContact()
   {
    this.contact = new Contact;
   }

    
}