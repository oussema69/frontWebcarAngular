import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  url=environment.Api
  constructor(public http:HttpClient) { }
  getAll(id:any): Observable<any> {
    return this.http.get(this.url+"cars/users/"+id);
  }
  getByid(id:any): Observable<any> {
    return this.http.get(this.url+"cars/"+id);
  }
  update(id:any,dataSend:any):Observable<any>{
    return this.http.put(this.url+"cars/"+id,dataSend)
  }
  delete(id:any):Observable<any>{
    return this.http.delete(this.url+"cars/"+id)
  }
  add(dataSend:any):Observable<any>{
    return this.http.post(this.url+"cars",dataSend)
  }

}
