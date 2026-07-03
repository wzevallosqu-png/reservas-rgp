import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {  }
  
  // Método para guardar el token en el localStorage
  setToken(token: string): void {
    localStorage.setItem('auth_token', token);
  }

  // Método para obtener el token
  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  // Método para eliminar el token
  clearToken(): void {
    localStorage.removeItem('auth_token');
  }
}
