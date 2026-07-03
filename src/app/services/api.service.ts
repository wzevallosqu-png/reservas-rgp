import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  //private controller: string = 'https://puzzlepublicidad.com/webapi'; // DEV
  private controller: string = 'http://localhost:3000/webapi'; // LOCAL

  constructor(private http: HttpClient) { }

  // Método POST
  post<TResponse>(url: string, data: any): Observable<TResponse>{
    return this.http.post<TResponse>(`${this.controller}/${url}`, data);
  }

  // Método PUT
  put<TResponse>(url: string, id: number, data: any): Observable<TResponse> {
    return this.http.put<TResponse>(`${this.controller}/${url}/${id}`, data);
  }
  
  // Método GET
  get<TResponse>(url: string, headers: HttpHeaders): Observable<TResponse> {
    return this.http.get<TResponse>(`${this.controller}/${url}`, { headers: headers });
  }

  // Método DOWNLOAD
  download(url: string){
    return this.http.get(`${this.controller}/${url}`, {
      responseType: 'blob'
    });
  }
}
