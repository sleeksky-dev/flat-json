function isArray(value) {
    return Array.isArray(value);
  }
  
  function isObject(value) {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
  }
  
  function isString(value) {
    return typeof value === 'string' || value instanceof String;
  }
  
  function isNumber(value) {
    return typeof value === 'number' || value instanceof Number;
  }
  
  function isBoolean(value) {
    return typeof value === 'boolean' || value instanceof Boolean;
  }
  
  function isInteger(value) {
    return Number.isInteger(value);
  }
  
  function isFunction(value) {
    return typeof value === 'function';
  }
  
  function isRegExp(value) {
    return value instanceof RegExp;
  }

  module.exports = { isArray, isObject, isString, isNumber, isBoolean, isInteger, isFunction, isRegExp }