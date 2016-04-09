var guid = require('guid');
var listeners = {};

module.exports = {
    register : function(cb){
        var id = guid.raw();
        listeners[id] = callback;
        return id;
    },
    dispatch : function(dispatch){
        console.info("Dispatching....", payload);
        for(var id in listeners){
            var listener = listeners[id];
            listener(payload);
        }
    }
}
