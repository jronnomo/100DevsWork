// DESCRIPTION:
// In this kata we are going to mimic a software versioning system.

// You have to implement a vm function returning an object.

// It should accept an optional parameter that represents the initial version. The input will be in one of the following formats: "{MAJOR}", "{MAJOR}.{MINOR}", or "{MAJOR}.{MINOR}.{PATCH}". More values may be provided after PATCH but they should be ignored. If these 3 parts are not decimal values, an exception with the message "Error occured while parsing version!" should be thrown. If the initial version is not provided or is an empty string, use "0.0.1" by default.

// This class should support the following methods, all of which should be chainable (except release):

// major() - increase MAJOR by 1, set MINOR and PATCH to 0
// minor() - increase MINOR by 1, set PATCH to 0
// patch() - increase PATCH by 1
// rollback() - return the MAJOR, MINOR, and PATCH to their values before the previous major/minor/patch call, or throw an exception with the message "Cannot rollback!" if there's no version to roll back to
// release() - return a string in the format "{MAJOR}.{MINOR}.{PATCH}"
// May the binary force be with you!

class VM {
    constructor(major, minor, patch) {
        this.rollbackVersions = [];
        this.version = { major, minor, patch };
    }

    major() {
        this.updateRollbackVersion();
        this.version.major += 1;
        this.version.minor = 0;
        this.version.patch = 0;
        return this;
    }

    minor() {
        this.updateRollbackVersion();
        this.version.minor += 1;
        this.version.patch = 0;
        return this;
    }

    patch() {
        this.handleDefaultPatch();
        this.updateRollbackVersion();
        this.version.patch += 1;
        return this;
    }

    rollback() {
        if (this.rollbackVersions.length === 0){
            throw new Error('Cannot rollback!');
        }
        this.version = this.rollbackVersions[this.rollbackVersions.length - 1];
        this.rollbackVersions.pop();
        return this;
    }

    release() {
        this.handleDefaultPatch();
        const { major, minor, patch } = this.version;
        return [major, minor, patch].join('.');
    }

    // handle default value for patch
    handleDefaultPatch() {
        if (
            this.version.major === 0 &&
            this.version.minor === 0 &&
            this.version.patch === 0
        ) {
            this.version.patch = 1;
        }
    }

    updateRollbackVersion() {
        const { major, minor, patch } = this.version;
        this.rollbackVersions.push({ major, minor, patch });
    }
}

const vm = (version = '') => {
    // default value
    //the 2nd half of this ternary conditional is for a provided value of 1-2 numbers. It adds the required 0's because it'll snip
    //and return only the required amount of numbers anyway
    version += version.trim().length === 0 ? '0.0.0' : '.0.0.0';

    //version = '5.1.0'
    //version += version.trim().length === 0 ? '0.0.0' : '.0.0.0' >>> '5.1.0.0.0.0'
    //version.split('.')                                          >>> ['5', '1', '0', '0', '0', '0']
    //version.split('.').filter(str => str !== '')                >>> ['5', '1', '0', '0', '0', '0']
    //version.split('.').filter(str => str !== '').slice(0,3)     >>> ['5', '1', '0']

    let versions = version
        .split('.')
    //    .filter((str) => str !== '')
        .slice(0, 3);
    // handle version is not number/decimal
    versions = versions.map((v) => {
        if (Number(v) != v)
            // means the version is include chars
            throw new Error('Error occured while parsing version!');
        return Number(v);
    });

    return new VM(versions[0], versions[1], versions[2]);
};

//___________________________________________________________________________________________________________________________________


// BRIEFING
// Greetings, warrior! In this kata you will learn, how Object.create method does its job.

// First over, what does it do? The signature of Object.create is like this:

// //throws TypeError
// //returns newly created object
// Object.create(prototype, [properties])
// Object.create serves to create new object that inherits given prototype and has properties being defined by "properties" parameter set on it. Parameters values must meet following requirements:

// prototype parameter should be some object1 (i.e. a non-primitive value) or null (but not undefined!). If bad value passed for prototype, error TypeError must be thrown.

// properties parameter can be of any type or omitted at all.

// As a result of execution, Object.create will return a newly created object with inner property [[Prototype]]2 set to value of prototype parameter. If properties parameter is passed and is not undefined, then Object.create will make call Object.defineProperties(obj,properties), where obj is the object to be returned by Object.create.

// OBJECTIVES
// In absence of the original Object.create create your own implementation of it that acts like the original one and assign it to the Object.create. To access/modify inner [[Prototype]] property of an object, use the methods Object.getPrototypeOf() and Object.setPrototypeOf(), respectively. 2

// Your implementation will be used like this:

// var citizen = {
//   sleep: function(){ return "zzZ..."; },
//   panic: function(){ return "AaAaAaAa!"; }
// };

// var veteran = Object.create(citizen,{
//         panic: {
//           value: function(){
//             return "SNAFU";
//           }
//         }
//       });
// INFORMATION
// Formal description of Object.create function in ECMAScript 5.1
// Prototype-based inheritance description in ECMAScript 5.1
// Notes
// 1 In JavaScript everything is an object, except these primitives:

// null
// undefined
// numbers (42, 3.14, -1, NaN, Infinity, Number('123'), etc.)
// big Integers (-1n, 0n, 1n, BigInt(123), etc.)
// strings ("", "dan", "abnormal termination", String(123), etc.)
// boolean (true, false, Boolean(123))
// symbols (Symbol("abc"), Symbol())
// Everything else, like RegExp literals (/abc/), functions, values created by invoking a function with new, Arrays, ... are objects.

// 2 An inner property is a property is not accessible through language constructs. But [[Prototype]] is an exception and is acessible through Object.setPrototypeOf() and Object.getPrototypeOf().

// prototype - a prototype to be inherited by newly created object
// properties (optional) - argument, to be passed to Object.defineProperties
//
// throws TypeError if `prototype` parameter is not object and is not null
//
// returns newly created object

Object.create = function(prototype, properties) {
    //Your code goes here
    //And remember: you need not to reinvent Object.defineProperties on your own!
    if(prototype === undefined) throw new TypeError;
    var obj = new Object;
    obj.__proto__ = prototype;
    if(properties !== undefined){
      Object.defineProperties(obj, properties);
    }
    return obj;
  };


  //OR

  Object.create = function (prototype, properties = {}) {
    if (typeof prototype !== "object") throw new TypeError();
    return Object.defineProperties({__proto__: prototype}, properties);
  };


//___________________________________________________________________________________________________________________________________