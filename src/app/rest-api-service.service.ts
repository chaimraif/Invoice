import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiServiceService {
apiUrl:string ="http://localhost:54891/Api/Invoice";
HttpOptions:any = { headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' }) }
  constructor(public Http:HttpClient) { }

  public  Post(Body: any = null) {        
    let Result = this.Http.post(this.apiUrl, Body, this.HttpOptions)        
    return Result;
  } 
  public Get() {    
    let Result = this.Http.get(this.apiUrl)        
    return Result;
  } 
}
