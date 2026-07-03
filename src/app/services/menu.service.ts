import { Injectable } from '@angular/core';
import { MenuDto } from '../interfaces/menuDto.model';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import { RespuestaDto } from '../interfaces/respuestaDto.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private apiService: ApiService, private authService: AuthService) { }

  token = this.authService.getToken();
    
  listarMenus() {
    let url = `listarMenus`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
    const data = this.apiService.get<RespuestaDto>(url, headers);
    return data;
  }

  insertarMenu(menu: MenuDto) {
    let url = `insertarMenu`;
    const data = this.apiService.post<RespuestaDto>(url, menu);
    return data;
  }

  actualizarMenu(menu: MenuDto) {
    let url = `actualizarMenu`;
    const data = this.apiService.put<RespuestaDto>(url, menu.idMenu, menu);
    return data;
  }

  buscarMenu(idMenu: string) {
    let url = `buscarMenu`;
    let headers = new HttpHeaders();
    headers = headers.set('idMenu', idMenu);
    const data = this.apiService.get<RespuestaDto>(url, headers);
    return data;
  }

}
