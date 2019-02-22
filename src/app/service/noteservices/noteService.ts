import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class noteService {
    constructor(private http: HttpClient) { }
   
    postUser(user, url) {
        console.log("data in user--10",user);
        
        var httpOptions = {
            headers: new HttpHeaders // create header object
                ({
                    'Content-Type': 'application/json'
                }),
        };
        // set header in your http request
        return this.http.post('http://localhost:3000' + url, user, httpOptions);
    }
}