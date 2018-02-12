(() => {
  'use strict';
  let cluster = require('cluster');
  let config = require('./config.js');
  let runServer = () => {
      require('./app')(process.cwd(), config, app => {
        app.listen(config.porthttp)
      });
  }
  if (config.multicore) {
  
  } else {
    runServer()
  }
})();
