import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url=environment.Api
  constructor(public http:HttpClient) { }
  getAll(id:any): Observable<any> {
    return this.http.get(this.url+"users/role/"+id);
  }
  getByid(id:any): Observable<any> {
    return this.http.get(this.url+"users/"+id);
  }
  update(id:any,dataSend:any):Observable<any>{
    return this.http.put(this.url+"users/"+id,dataSend)
  }
  delete(id:any):Observable<any>{
    return this.http.delete(this.url+"users/"+id)
  }
  add(dataSend:any):Observable<any>{
    return this.http.post(this.url+"register",dataSend)
  }
  getAllcontact():Observable<any>{
    return this.http.get(this.url+"contacts")
  }
  deleteContact(id:any):Observable<any>{
    return this.http.delete(this.url+"contacts/"+id)
  }

}
