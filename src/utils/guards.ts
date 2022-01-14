function isDefined<T>(val: T): val is NonNullable<T> {
  return val !== undefined
}

function assertDefined<T>(val: T, message = "Expected some value"): asserts val is NonNullable<T> {
  if (!isDefined(val)) {
    throw new TypeError(message)
  }
}

export { assertDefined }
