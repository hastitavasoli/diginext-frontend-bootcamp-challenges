/**
 * Creates a deep copy of the arg. Remember that the arg can be nested with infinite levels.
 * Use case: List copy. Object copy.
 *
 * @param {JSON serializable value} arg Any JSON serializable value
 *
 * @returns An Literal exact copy of the arg
 */
function deepClone(arg) {
  if (typeof arg !== 'object') return arg
  let copiedObject = {}
  for (const property in arg) {
    copiedObject[property] = deepClone(arg[property])
  }
  return copiedObject
}