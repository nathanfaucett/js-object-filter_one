var tape = require("tape"),
    objectFilterOne = require("..");


tape("objectFilterOne(object, callback) returns value that passes the test implemented by the provided function", function(assert) {
    assert.deepEquals(
        objectFilterOne({
            a: "a",
            b: "b",
            c: "c"
        }, function(value) {
            return value === "b";
        }), "b"
    );
    assert.end();
});
