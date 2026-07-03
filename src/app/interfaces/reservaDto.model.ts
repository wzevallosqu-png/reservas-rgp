export interface ReservaDto {
    idReserva : number;
    idUsuario : number;
    fechaReserva : string;
    horaReserva : string;
    cantidadPersonas : number;
    estadoReserva : number;
    detalles : DetalleReserva[];
}

export class DetalleReserva {
    idMenu : number = 0;
    cantidad : number = 0;
}