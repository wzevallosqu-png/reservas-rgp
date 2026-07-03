import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, Validators, AbstractControl } from '@angular/forms';
import { HomeRout } from 'src/app/helpers/routs.constants';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UsuarioDto } from 'src/app/interfaces/usuarioDto.model';
import { Usuario } from 'src/app/models/usuario.model';
import { TipoUsuario } from 'src/app/shared/enums/tipo.usuario';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [CommonModule, 
    FormsModule,
    ReactiveFormsModule,  
    IonicModule]
})
export class LoginPage implements OnInit {
  
  cargando:boolean = false;
  data: any;
  tipoUsuario:any = TipoUsuario;
  usuarioDto: UsuarioDto = new Usuario();
  error: boolean = false;
  mensaje: string = "";
  configurationForm: UntypedFormGroup = new FormGroup({}); 
  
  constructor(private router: Router
   , private usuarioService: UsuarioService
   , private authService: AuthService
   , private fb: UntypedFormBuilder
  ) { }

  ngOnInit() {
    this.buildForm();
    this.verificarSesion();
  }

  buildForm(): void {
    this.configurationForm = this.fb.group({
      correoElectronico: [null, [Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]],
      clave: [null, [Validators.required]]
    });
  }

  get correoElectronico(): AbstractControl {
    return this.configurationForm?.get('correoElectronico')  as UntypedFormGroup;
  }

  get clave(): AbstractControl {
    return this.configurationForm?.get('clave')  as UntypedFormGroup;
  }

  verificarSesion(){
    this.tipoUsuario = localStorage.getItem('tipoUsuario');
    if(this.tipoUsuario==TipoUsuario.Administrador)
      this.router.navigate([HomeRout.administration]);
    if(this.tipoUsuario==TipoUsuario.Gestor)
      this.router.navigate([HomeRout.gestion]);
  }

  iniciarSesion(){
    console.log(this.configurationForm);
    if (this.configurationForm.invalid) {
      this.error=true;
      return;
    }
    this.cargando = true;
    this.usuarioDto = this.configurationForm.getRawValue();
    this.usuarioService.iniciarSesion(this.usuarioDto).subscribe( response =>{
      if(response.exito){
        this.authService.setToken(response.mensaje);
        localStorage.setItem('tipoUsuario', response.data.tipoUsuario);
        localStorage.setItem('correoElectronico', response.data.correoElectronico);
        localStorage.setItem('idUsuario', response.data.idUsuario);
        if(response.data.tipoUsuario==TipoUsuario.Administrador)
          this.router.navigate([HomeRout.administration]);
        if(response.data.tipoUsuario==TipoUsuario.Gestor){
          localStorage.setItem('idArea', response.data.idArea);
          localStorage.setItem('descripcionArea', response.data.descripcionArea);
          localStorage.setItem('accesoTotal', response.data.accesoTotal);
          localStorage.setItem('gestionarTramites', response.data.gestionarTramites);
          localStorage.setItem('generarReportes', response.data.generarReportes);
          this.router.navigate([HomeRout.gestion]);
        }
        if(response.data.tipoUsuario==TipoUsuario.Usuario)
          this.router.navigate([HomeRout.makeReservation]);
      }   
      else{
        this.error=true;
        this.mensaje=response.mensaje;
      }
      this.cargando = false;
    });
  }

  registrarse(){
    this.router.navigate([HomeRout.newUser]);
  }
}
