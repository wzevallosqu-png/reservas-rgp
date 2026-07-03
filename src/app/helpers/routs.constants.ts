export const Routs = {
    path: '',
    rout: '',
}
export const HomeRout = {
    path: 'home',
    rout: '/home',
    login: '/login',
    administration: 'panelAdministracion',
    gestion: 'panelGestion',
    changePass: 'cambiarClave',
    generatePass: 'generarClaveNueva',
    makeReservation: '/make-reservation',
    newUser: '/new-user'
}
export const AuditoriaRouts = {
    path: 'auditoria',
    rout: '/auditoria',
    report: {
        path: 'auditoria/reporteAuditoria',
        rout: '/auditoria/reporteAuditoria'
    }
}
export const RolesRouts = {
    path: 'roles',
    rout: '/roles',
    list: {
        path: 'roles/listaRoles',
        rout: '/roles/listaRoles'
    },
    edit: {
        path: 'roles/actualizarRol/:idRol',
        rout: '/roles/actualizarRol'
    }
}
export const AreasRouts = {
    path: 'areas',
    rout: '/areas',
    list: {
        path: 'areas/listaAreas',
        rout: '/areas/listaAreas'
    },
    edit: {
        path: 'areas/actualizarArea/:idArea',
        rout: '/areas/actualizarArea'
    },
    save: {
        path: 'areas/registrarArea',
        rout: '/areas/registrarArea'
    }
}
export const UsuariosRouts = {
    path: 'usuarios',
    rout: '/usuarios',
    list: {
        path: 'usuarios/listaUsuarios',
        rout: '/usuarios/listaUsuarios'
    },
    edit: {
        path: 'usuarios/actualizarUsuario/:idUsuario',
        rout: '/usuarios/actualizarUsuario'
    },
    save: {
        path: 'usuarios/registrarUsuario',
        rout: '/usuarios/registrarUsuario'
    }
}
