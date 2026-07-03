import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, Validators, AbstractControl, FormGroup } from '@angular/forms';
import { HomeRout } from 'src/app/helpers/routs.constants';
import { ClienteService } from 'src/app/services/cliente.service';
import { ClienteDto } from 'src/app/interfaces/clienteDto.model';
import { Cliente } from 'src/app/models/cliente.model';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.page.html',
  styleUrls: ['./new-user.page.scss'],
  standalone: true,
  imports: [CommonModule, 
    FormsModule,
    ReactiveFormsModule,  
    IonicModule]
})
export class NewUserPage implements OnInit {

  cargando:boolean = false;
  data: any;
  clienteDto: ClienteDto = new Cliente();
  error: boolean = false;
  mensaje: string = "";
  configurationForm: UntypedFormGroup = new FormGroup({}); 

  constructor(private router: Router, 
    private clienteService: ClienteService, 
    private fb: UntypedFormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.configurationForm = this.fb.group({
      nombres: [null, [Validators.required]],
      apellidoPaterno: '',
      apellidoMaterno: '',
      correoElectronico: [null, [Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]],
      telefono: [null, [Validators.required]],
      clave: [null, [Validators.required]],
      claveConfirmada: '',
      tipoDocumento: 0,
      numeroDocumento: '',
      direccion: '',
      tipoUsuario: 2,
      estadoUsuario: 1,
    }, {validators: this.ValidarClaves()});  
  }

  get nombres(): AbstractControl {
    return this.configurationForm?.get('nombres')  as UntypedFormGroup;
  }

  get apellidoPaterno(): AbstractControl {
    return this.configurationForm?.get('apellidoPaterno')  as UntypedFormGroup;
  }
  
  get apellidoMaterno(): AbstractControl {
    return this.configurationForm?.get('apellidoMaterno')  as UntypedFormGroup;
  }
  
  get correoElectronico(): AbstractControl {
    return this.configurationForm?.get('correoElectronico')  as UntypedFormGroup;
  }

  get telefono(): AbstractControl {
    return this.configurationForm?.get('telefono')  as UntypedFormGroup;
  }

  get clave(): AbstractControl {
    return this.configurationForm?.get('clave')  as UntypedFormGroup;
  }
  
  get claveConfirmada(): AbstractControl {
    return this.configurationForm?.get('claveConfirmada')  as UntypedFormGroup;
  }

  registrar(){
    console.log(this.configurationForm);
    if (this.configurationForm.invalid) {
      this.error=true;
      return;
    }
    this.cargando = true;
    this.clienteDto = this.configurationForm.getRawValue();
    this.clienteService.insertarCliente(this.clienteDto).subscribe( response =>{
      if(response.exito){
        this.router.navigate([HomeRout.login]);
      }   
      else{
        this.error=true;
        this.mensaje=response.mensaje;
      }
      this.cargando = false;
    });
  }
  
  cancelar(){
    this.router.navigate([HomeRout.login]);
  }

  ValidarClaves() { 
    return(formGroup:FormGroup)  =>{
      const  password  =  formGroup.controls['clave'];
      const  confirmpassword  =  formGroup.controls['clave'];
      if(password  &&  confirmpassword  &&  password.value  !=  confirmpassword.value){
        confirmpassword.setErrors({invalid: true});
      }else{
        confirmpassword.setErrors(null);
      }
    }
  }
}
