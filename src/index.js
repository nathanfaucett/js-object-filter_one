var keys = require("@nathanfaucett/keys");


module.exports = objectFilterOne;


function objectFilterOne(object, callback) {
    var objectKeys = keys(object),
        i = -1,
        il = objectKeys.length - 1,
        key, value;

    while (i++ < il) {
        key = objectKeys[i];
        value = object[key];

        if (callback(value, key, object)) {
            return value;
        }
    }

    return undefined;
}
