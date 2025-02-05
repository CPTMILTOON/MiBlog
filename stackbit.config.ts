import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
  stackbitVersion: '0.5.3',
  ssgName: 'hugo',  // Especifica que estás usando Hugo
  nodeVersion: '18',  // Usa la versión de Node.js que necesites
  devCommand: 'hugo server',  // Comando para iniciar el servidor de desarrollo
  contentSources: [
    {
      type: 'git',
      rootPath: '.',  // Ruta raíz del proyecto
      contentDir: 'content',  // Carpeta donde está el contenido
    },
  ],
});