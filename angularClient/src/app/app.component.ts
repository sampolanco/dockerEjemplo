import { Component } from '@angular/core';
import { UsuarioService } from './service/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularClient';
  usuarios:any[]=[];

  constructor(private usuarioService :UsuarioService){
    this.usuarioService.getAllUsers().subscribe(
      (data:any)=>{
        console.log('Informacion: ',data);
        this.usuarios=data;
      }
    );
  }
}
