"use strict";
function identity(arg) {
    arg.filter(function (x) {
        return x !== null;
    });
    return arg;
}
var myIdentity = identity(['PZU']);
