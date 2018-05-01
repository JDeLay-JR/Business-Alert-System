const validate = (objToValidate, id, callback) => {
  for (const key in objToValidate) {
    if (!objToValidate[key]) {
      return alert('Input fields cannot be empty!')
    }
  }
  return callback(objToValidate, id)
}

module.exports = {validate}
