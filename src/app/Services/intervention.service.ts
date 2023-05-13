import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InterventionService {

  url=environment.Api
  constructor(public http:HttpClient) { }

  getByid(id:any): Observable<any> {
    return this.http.get(this.url+"inter/"+id);
  }
  update(id:any,dataSend:any):Observable<any>{
    return this.http.put(this.url+"inter/"+id,dataSend)
  }
  delete(id:any):Observable<any>{
    return this.http.delete(this.url+"inter/"+id)
  }
  add(dataSend:any):Observable<any>{
    return this.http.post(this.url+"inter",dataSend)
  }
  getByUseId(id:any):Observable<any>{
    return this.http.get(this.url+"inter/user/"+id)
  }
  getByReclamation(id:any):Observable<any>{
    return this.http.get(this.url+"inter/rec/"+id)
  }
  gettacheByTypeId(type:any,id:any):Observable<any>{
    return this.http.get(this.url+"tache/type/"+type+"/"+id)
  }


}
