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
    //contacts:any;
    contact= new Contact();
    subscription!: Subscription;
    constructor(public ApiSvc : ApiService){}
    
     
     
    post(){
        if(this.contact.id)
            this.ApiSvc.putContact(this.contact);
        else
            this.ApiSvc.postContact(this.contact);     

    }

    ngOnInit(){
    this.subscription = this.ApiSvc.getSelectedContact().subscribe(result  =>{
       this.contact = result;
    })
    }
   ngOnDestroy(){
        this.subscription.unsubscribe();
   }
   resetContact()
   {
    this.contact = new Contact;
   }

  

    
}