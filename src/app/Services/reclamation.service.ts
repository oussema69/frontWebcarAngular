import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  url=environment.Api
  constructor(public http:HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.url+"rec");
  }
  getByid(id:any): Observable<any> {
    return this.http.get(this.url+"rec/"+id);
  }
  update(id:any,dataSend:any):Observable<any>{
    return this.http.put(this.url+"rec/"+id,dataSend)
  }
  delete(id:any):Observable<any>{
    return this.http.delete(this.url+"rec/"+id)
  }
  add(dataSend:any):Observable<any>{
    return this.http.post(this.url+"reclamations",dataSend)
  }
  getByUseId(id:any):Observable<any>{
    return this.http.get(this.url+"reclamationsUsers/"+id)
  }
  getByCarId(id:any):Observable<any>{
    return this.http.get(this.url+"rec/user/"+id)
  }
  getrecBytechId(id:any):Observable<any>{
    return this.http.get(this.url+"rec/tech/"+id)
  }
  getIntervBy(id:any):Observable<any>{
    return this.http.get(this.url+"inter/rec/"+id)
  }

}
