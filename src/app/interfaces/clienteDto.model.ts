export interface ClienteDto {
    idCliente : number;
    nombres : string;
    apellidoPaterno : string;
    apellidoMaterno : string;
    tipoDocumento : number;
    numeroDocumento : string;
    direccion : string;
    telefono : string;
    correoElectronico : string;
    clave : string;
    tipoUsuario : number;
    estadoUsuario : boolean;
}