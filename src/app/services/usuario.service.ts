import { Injectable } from '@angular/core';
import { UsuarioDto } from '../interfaces/usuarioDto.model';
import { ApiService } from './api.service';
import { RespuestaDto } from '../interfaces/respuestaDto.model';
import { HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private apiService: ApiService, private datePipe: DatePipe) { }

  listarUsuarios() {
    let url = `listarUsuarios`;
    let headers = new HttpHeaders();
    const data = this.apiService.get<RespuestaDto>(url, headers);
    return data;
  }

  insertarUsuario(usuario: UsuarioDto) {
    let url = `insertarUsuario`;
    const data = this.apiService.post<RespuestaDto>(url, usuario);
    return data;
  }

  actualizarUsuario(usuario: UsuarioDto) {
    let url = `actualizarUsuario`;
    const data = this.apiService.put<RespuestaDto>(url, usuario.idUsuario, usuario);
    return data;
  }

  buscarUsuario(idUsuario: string) {
    let url = `buscarUsuario`;
    let headers = new HttpHeaders();
    headers = headers.set('idUsuario', idUsuario);
    const data = this.apiService.get<RespuestaDto>(url, headers);
    return data;
  }

  iniciarSesion(usuario: UsuarioDto) {
    let url = `iniciarSesion`;
    const data = this.apiService.post<RespuestaDto>(url, usuario);
    return data;
  }

  cerrarSesion(idUsuario: number) {
    let url = `cerrarSesion`;
    let headers = new HttpHeaders();
    const data = this.apiService.put<RespuestaDto>(url, idUsuario, headers);
    return data;
  }

  actualizarClave(usuario: UsuarioDto) {
    let url = `actualizarClaveUsuario`;
    const data = this.apiService.post<RespuestaDto>(url, usuario);
    return data;
  }

  generarNuevaClaveUsuario(usuario: UsuarioDto) {
    let url = `generarNuevaClaveUsuario`;
    const data = this.apiService.post<RespuestaDto>(url, usuario);
    return data;
  }

  reporteAuditoria(area: string, fechaInicio: Date, fechaFin: Date) {
    let url = `ReporteAuditoria`;
    let fecInicio = this.datePipe.transform(fechaInicio, 'yyyy-MM-dd')
    let fecFin = this.datePipe.transform(fechaFin, 'yyyy-MM-dd')
    let headers = new HttpHeaders();
    headers = headers.set('area', area);
    headers = headers.set('fechaInicio', fecInicio?fecInicio:'');
    headers = headers.set('fechaFin', fecFin?fecFin:'');
    const data = this.apiService.get<RespuestaDto>(url, headers);
    return data;
  }

  dashboardAdministracion(areas: string, tipos: string, estados: string, anio: string, mes: string, descripcion: string) {
    let url = `dashboardAdministracion`;
    let headers = new HttpHeaders();
    headers = headers.set('areas', areas);
    headers = headers.set('tipos', tipos);
    headers = headers.set('estados', estados);
    headers = headers.set('anio', anio);
    headers = headers.set('mes', mes);
    headers = headers.set('descripcion', descripcion);
    const data = this.apiService.get<RespuestaDto>(url, headers);
    return data;
  }

}
