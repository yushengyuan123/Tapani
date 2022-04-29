function addUnit(value: number | string) {
  if (typeof value === "number") {
    value = value + 'px'
  }
  return value
}

export {
  addUnit
}