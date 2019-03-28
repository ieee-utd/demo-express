import Datastore = require("nedb");

export const model = new Datastore({ 
  filename: __dirname + "/../db/tasks.db",
  autoload: true
});