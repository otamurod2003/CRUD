import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class ApiService{
    
    constructor(private http: HttpClient) {}
    postContact(contact:object){
        const  url = 'https://localhost:44362/api/contact';
        this.http.post(url,contact).subscribe(result =>{
            console.log(result);
        })
    }

    getContact(){
       return this.http.get('https://localhost:44362/api/contact');
    }

    // deleteContact(){
    //     this.http.delete('https://localhost:44362/api/contact');
    // }

    // putContact(){
    //     this.http.put('https://localhost:44362/api/contact',);
    // }
}