/**
 * Module using named exports pattern
 * @param {string} message 
 * @param {string} level
 * @returns {string}
 */
const formatMessage = (message, level) => {
  return `[${level.toUpperCase()}] ${new Date().toISOString()}: ${message}`
}

//export public functions
exports.info = (message) => {
  console.log(formatMessage(message, "INFO"));
}

exports.warning = (message) => {
  console.log(formatMessage(message, "WARNING"));
}

exports.error = (message) => {
  console.log(formatMessage(message, "ERROR"));
}