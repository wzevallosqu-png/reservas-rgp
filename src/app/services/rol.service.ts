import { Injectable } from '@angular/core';
import { RolDto } from '../interfaces/rolDto.model';
import { ApiService } from './api.service';
import { RespuestaDto } from '../interfaces/respuestaDto.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(private apiService: ApiService) { }

  listarRoles() {
    let url = `listarRoles`;
    let headers = new HttpHeaders();
    const data = this.apiService.get<RespuestaDto>(url, headers);
    return data;
  }

  insertarRol(rol: RolDto) {
    let url = `insertarRol`;
    const data = this.apiService.post<RespuestaDto>(url, rol);
    return data;
  }

  actualizarRol(rol: RolDto) {
    let url = `actualizarRol`;
    const data = this.apiService.put<RespuestaDto>(url, rol.idRol, rol);
    return data;
  }

  buscarRol(idRol: string) {
    let url = `buscarRol`;
    let headers = new HttpHeaders();
    headers = headers.set('idRol', idRol);
    const data = this.apiService.get<RespuestaDto>(url, headers);
    return data;
  }

}
