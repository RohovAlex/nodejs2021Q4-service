// migration to ts
import PORT from './common/config';

import server from './app';

const start = async () => {
  try {
    await server.listen(PORT);
  } catch (error) {
    server.log.error(error);
  }
}

start();