export const AppConstants = {
    TitleModal: {
        Success: 'Éxito',
        Warning: 'Advertencia',
        Delete: 'Error',
        Login: 'Bienvenido',
        Error: 'Error'
    },

    MessageModal: {
        Error: 'Ocurrió un error durante el proceso, intente nuevamente',
        InvalidSession: 'No tiene acceso a la pantalla solicitada o su sesión ya expiró.',
        InvalidFile: 'Debe seleccionar un archivo válido.',
        InvalidDimensionAppIcon: 'La dimensión del ícono debe ser 300x300.',
        InvalidDimensionBannerImage: 'La dimensión del ícono debe ser 495x246.',
        InvalidDimensionPreviewVideo: 'La dimensión de la imagen debe ser 500x300.',
        InvalidFileSize: 'El tamaño del archivo debe contener {size}MB como máximo.',
        InvalidDimensionLogo: 'La dimensión del logo debe ser 300x300.',
        NewNotification: 'Tienes una nueva notificación'
    },

    EmptyMessage: {
        NotificationDescription: 'No se encontraron nuevas notificaciones'
    },

    MaxFileSizeMB: {
        AppIcon: 0.5,
        Video: 50,
        PreviewVideo: 0.5,
        ImageNew: 0.5,
        ImageBanner: 0.5,
        Logo: 0.1,
        ImageProfile: 0.1
    },

    AllowedExtensions: {
        AppIcon: 'image/png,image/svg+xml',
        Video: 'video/mp4,video/x-m4v,video/*',
        PreviewVideo: 'image/*',
        ImageNew: 'image/*',
        ImageBanner: 'image/*',
        Logo: 'image/*',
        ImageProfile: 'image/*'
    }
};
