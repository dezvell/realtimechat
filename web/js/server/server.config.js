module.exports = {
    host : 'test.local',
    port : parseInt('3001'),
    origin : ' *:*',
    allowedServers : ["127.0.0.1","test.local"],
    dbOptions : {"driver":"dummy","config":[]},
    checkClientOrigin : 1,
    sessionVarName : 'PHPSESSID',
    socketLogFile : '/var/log/node-socket.log'
};

