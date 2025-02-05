import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
  stackbitVersion: '0.5.3',
  ssgName: 'hugo',
  nodeVersion: '18',
  devCommand: 'hugo server',  // Comando para iniciar el servidor de desarrollo
  contentSources: [
    {
      type: 'git',
      rootPath: '.',
      contentDir: 'content',
    },
  ],
});