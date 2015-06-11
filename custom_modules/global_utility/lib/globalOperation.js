"use strict";

//Interface
module.exports = (function () {

    //Global Constant can not change. We can not set the object again
    //eg: ({name:'myname',age:24},[optional])
    function setGlobalConstant(jsonObject, globalEnable) {
        var myObject = globalEnable || global;
        for (var key in jsonObject) {
            if (jsonObject.hasOwnProperty(key)) {
                Object.defineProperty(myObject, key, {
                    value: jsonObject[key],
                    writable: false
                });
                if (jsonObject[key] instanceof Object) {
                    setGlobalConstant(jsonObject[key], myObject[key]);
                }
            }
        }
    }

    return {
        setGlobalConstant: setGlobalConstant
    }
})();








