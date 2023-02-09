import { Component } from "@angular/core";
import { ApiService } from "./api.service";
@Component({
    selector: 'contact',
    templateUrl: './contact.component.html'
})
export class ContactComponent
{
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

    
}