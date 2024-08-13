/**
 * Returns a flatten object. Remember that the level of nesting is not specified.
 * Use case. Form creation for nested objects or lists.
 *
 * @param {object} object An object that may be nested.
 *
 * @returns flatten object.
 *
 * @example flatten({"a": {"b": {"c": "d"}}}) => {"a.b.c": "d"}
 *
 */
function flatten(obj, prefix = '') {
  return Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? prefix + '.' : '';
    if (typeof obj[k] === 'object' && obj[k] !== null) {
      Object.assign(acc, flatten(obj[k], pre + k));
    } else {
      acc[pre + k] = obj[k];
    }
    return acc;
  }, {});
}

console.log(flatten({ "a": { "b": { "c": "d" }, "e": { "f": { "g": "h" } } } }));


/**
 * Returns a nested object. Remember that the level of nesting is not specified.
 *
 * @param {object} object A flat object
 *
 * @returns maybe nested object
 *
 * @example revertFlatten({"a.b.c": "d"}) => {"a": {"b": {"c": "d"}}}
 *
 */
function revertFlatten(object) {
  // TODO: Implement here
}
