import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class ApiService{
    
    constructor(private http: HttpClient) {}
    postContact(contact:object){
        const url = 'https://localhost:44362/api/contact';
        this.http.post(url,contact).subscribe(result =>{
            console.log(result);
        })
    }
}