import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  //private url='http://localhost:8080/';
  private url='http://192.168.99.100:8080/';

  constructor(private http: HttpClient) {
    console.log('UsuarioServiceService');
  }

  get(metodo:string){
    const urlQuery:string =this.url+metodo;
    const headers= new HttpHeaders({
      'Content-Type':  'application/json'
    });
    return this.http.get(urlQuery,{headers});
  }

  getAllUsers(){
    return this.get('usuario/');
  }
}
