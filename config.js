module.exports = {
  'development': {
    "secret": "bd17ddffc6694d25834a99ac2708a498",
    //"database": "mongodb://localhost:27017/FormDatabase",
   "database":"mongodb://ranjitgorai:ranjit@ds139989.mlab.com:39989/ranjit",
    "siteUrl": "http://localhost:3000",
    /*"email": {
      "from": "s26c.sayan@gmail.com",
      "host": "smtp-pulse.com",
      "port": 465,
      "auth": {
        "user": "s26c.sayan@gmail.com",
        "pass": "Gne7SFoGLJ75B"
      }
    }*/
  },
    
    'production': {
    "secret": "bd17ddffc6694d25834a99ac2708a498",
    //"database": "mongodb://localhost:27017/FormDatabase",
   "database":"mongodb://ranjitgorai:ranjit@ds139989.mlab.com:39989/ranjit",
    "siteUrl": "http://localhost:3000",
   /* "email": {
      "from": "s26c.sayan@gmail.com",
      "host": "smtp-pulse.com",
      "port": 465,
      "auth": {
        "user": "s26c.sayan@gmail.com",
        "pass": "Gne7SFoGLJ75B"
      }
    }*/
  }
    
    
};
//mongodb://<dbuser>:<dbpassword>@ds139989.mlab.com:39989/ranjit
