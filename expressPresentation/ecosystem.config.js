module.exports = {
  apps : [{
    "name": "Example.Node",
    "script": "./bin/www",
    "max_restarts": 10,
    "min_uptime": "15s",
    "restart_delay": 5000,
    "watch": false,
    "instances": 1,
    "exec_mode": "cluster",
    "env": {
      "PORT": 3000,
      "NODE_ENV": "development"
    }
  }]
}
