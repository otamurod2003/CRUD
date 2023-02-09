import { Component } from "@angular/core";
import { ApiService } from "./api.service";
@Component({
    selector: 'contact',
    templateUrl: './contact.component.html'
})
export class ContactComponent
{
    contacts:any;
    constructor(private ApiSvc : ApiService){}
    
    contact = {
        Name: "",
        Adress:"",
        Phone:"",
        Age:"",
    }
    post(){
        this.ApiSvc.postContact(this.contact);
    }
    ngOnInit(){
        
            this.ApiSvc.getContact().subscribe(response =>{
              this.contacts = response;
            })
        }
    
    
}