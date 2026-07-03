export interface UsuarioDto {
    idUsuario : number;
    nombres : string;
    apellidos : string;
    tipoDocumento : number;
    numeroDocumento : string;
    direccion : string;
    correoElectronico : string;
    numeroTelefonico : string;
    clave : string;
    tipoUsuario : number;
    estadoUsuario : boolean;
    idArea : string;
    idRol : string;
    accesoTotal : boolean;
    recibirAlertas : boolean;
    gestionarTramites : boolean;
    generarReportes : boolean;
}