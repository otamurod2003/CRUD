import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject, Subscription } from "rxjs";
import { Contact } from "./contact";
import { ConstantPool } from "@angular/compiler";
@Injectable()
export class ApiService{
    selectedContact = new Subject<Contact>;
    
    constructor(private http: HttpClient) {}

    selectContact(contact : Contact){
        this.selectedContact.next(contact);
    }

    getSelectedContact(){
        return this.selectedContact.asObservable();
    }
    
    postContact(contact:Contact){
      
        this.http.post('https://localhost:44362/api/contact',contact).subscribe(result =>{
            console.log(result);
        })
    }

    getContact(){
       return this.http.get('https://localhost:44362/api/contact');
       
    }
    putContact(contact:Contact){
        
        this.http.put('https://localhost:44362/api/contact/'+contact.id,contact).subscribe(put =>{
            console.log(put);
        })
    }

}