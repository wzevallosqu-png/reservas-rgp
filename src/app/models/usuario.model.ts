export class Usuario {
    public idUsuario : number = 0;
    public nombres : string = '';
    public apellidos : string = '';
    public tipoDocumento : number = 0;
    public numeroDocumento : string = '';
    public direccion : string = '';
    public correoElectronico : string = '';
    public numeroTelefonico : string = '';
    public clave : string = '';
    public tipoUsuario : number = 2;
    public estadoUsuario : boolean = true;
    public idArea : string = '';
    public idRol : string = '';
    public accesoTotal : boolean = false;
    public recibirAlertas : boolean = false;
    public gestionarTramites : boolean = false;
    public generarReportes : boolean = false;
}