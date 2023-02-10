import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject, Subscription } from "rxjs";
import { Contact } from "./contact";
@Injectable()
export class ApiService{
    selectedContact = new Subject<Contact>;
    
    constructor(private http: HttpClient) {}

    selectContact(contact : any){
        this.selectedContact.next(contact)
    }

    getSelectedContact(){
        return this.selectedContact.asObservable()
    }

    postContact(contact:object){
        const  url = 'https://localhost:44362/api/contact';
        this.http.post(url,contact).subscribe(result =>{
            console.log(result);
        })
    }

    getContact(){
       return this.http.get('https://localhost:44362/api/contact');
    }

}